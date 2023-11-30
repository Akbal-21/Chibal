import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { AuthContext, InternationalContext } from "@/context";
import { getAllTeachers } from "@/db/admin";
import { ITeacher } from "@/interface";
import { en, es } from "@/messages";
import bcrypt from "bcryptjs";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  teacher: ITeacher;
}

interface FormData {
  Nombres?: string;
  Apellidos?: string;
  Correo?: string;
  Contra?: string
}

const TeacherTablePage: NextPage<Props> = ({ teacher }) => {
  const { language } = useContext(InternationalContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  const ms = language === "en" ? en : es;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>();

  //const [profe, setProfe] = useState<ITeacher>();

  useEffect(() => {
    if (teacher) {
      setValue("Nombres", teacher.Usuarios.Nombres);
      setValue("Apellidos", teacher.Usuarios.Apellidos);
      setValue("Correo", teacher.Usuarios.Correo);
    }
  }, []);

  const route = useRouter();
  const handleEdit = async (profe: ITeacher) => {
    console.log("log antes de api");
    const resp = await chibalApi({
      method: "PUT",
      url: "/admin",
      data: {
        profe
      }
    });
    route.reload();
    return;
  };

  const handleNew = async ( profe: ITeacher ) => {
    const id = user?.Usuarios_id;
    await chibalApi({
      method: "POST",
      url: "/admin",
      data: { profe, id },
    });
    route.push( "/admin" );
    return;
  };

  const onSubmit = async (form: FormData) => {
    const values = getValues();
    const profe = {
      Usuario_id: teacher.Usuario_id,
      Usuarios: {
        Nombres: String(values.Nombres),
        Apellidos: String(values.Apellidos),
        Correo: String(values.Correo),
        Contrasena: values.Contra ? bcrypt.hashSync(String(values.Contra)) : teacher.Usuarios.Contrasena
      },
      //Escuela_id: 
    };
    
    if( teacher.Usuario_id ){
      await handleEdit( profe );
      return;
    }else{
      await handleNew( profe );
      return;
    }
  };

  return (
    <SigInLayout titel={`${ms.admin.slug.admin} ${teacher.Usuarios.Nombres}`}>
      <div className="pt-11">
        <section className="bg-gray-2 reounded-xl">
          <div className="p-8 shadow-lg">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div>
                <div className="divider divider-horizontal">
                  {ms.admin.slug.editAdmin}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label>
                      {ms.admin.slug.name}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Nombres", {
                          required: ms.admin.slug.required,
                          minLength: {
                            value: 3,
                            message: "Mínimo 3 caracteres",
                          },
                        })}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      {ms.admin.slug.surname}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Apellidos", {
                          required: ms.admin.slug.required,
                          minLength: {
                            value: 5,
                            message: "Mínimo 5 caracteres",
                          },
                        })}
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label>
                      {ms.admin.slug.email}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Correo", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 5,
                            message: "Mínimo 5 caracteres",
                          },
                        })}
                      />
                    </label>
                  </div>
                  {
                    teacher.Usuarios.Contrasena === "" ? 
                      <div>
                        <label>
                          {ms.login.password}
                          <input
                            type="text"
                            className="input input-solid max-w-full"
                            {...register("Contra", {
                              required: "Este campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Mínimo 5 caracteres",
                              },
                            })}
                          />
                        </label>
                      </div>
                      :
                      <></>
                  }
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="rounded-lg btn btn-primary btn-block"
                  >
                    {ms.admin.slug.save}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </SigInLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };

  let teacher: ITeacher;

  if (slug === "new") {
    teacher = {
      Usuarios: {
        Nombres: "",
        Apellidos: "",
        Correo: "",
        Contrasena: ""
      },
    };
  } else {
    const datateacher = await getAllTeachers(slug);
    teacher = JSON.parse(JSON.stringify(datateacher));
  }

  if (!teacher) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      teacher,
    },
  };
};

export default TeacherTablePage;
