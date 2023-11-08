import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
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
}

const TeacherTablePage: NextPage<Props> = ({ teacher }) => {
  const { language } = useContext(InternationalContext);

  const ms = language === "en" ? en : es;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>();

  const [profe, setProfe] = useState<ITeacher>();

  useEffect(() => {
    if (teacher) {
      setValue("Nombres", teacher.Usuarios.Nombres);
      setValue("Apellidos", teacher.Usuarios.Apellidos);
      setValue("Correo", teacher.Usuarios.Correo);
    }
  }, []);

  const route = useRouter();
  const handleEdit = async (teacher: ITeacher) => {
    const resp = await chibalApi({
      method: "PUT",
      url: "/admin",
      data: {
        teacher,
      },
    });
    route.replace("/admin");
    return;
  };

  const handleNew = async (teacher: ITeacher) => {
    await chibalApi({
      method: "POST",
      url: "/admin",
      data: { teacher },
    });
    return route.replace("/admin");
  };

  const onSubmit = (form: FormData) => {
    const values = getValues();
    setProfe({
      Usuario_id: teacher.Usuario_id,
      Usuarios: {
        Nombres: String(values.Nombres),
        Apellidos: String(values.Apellidos),
        Correo: String(values.Correo),
        Contrasena: teacher.Usuarios.Contrasena,
      },
    });
    //setEscuela(admin_school);
    //? Aquí se hace el insert en base de datos?
    if (profe) {
      if (profe.Usuario_id) {
        return handleEdit(profe);
      } else {
        return handleNew(profe);
      }
      //saveAdmin( administrator ); //<--- Esto va en API
    }
    //console.log({ administrator, escuela })
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
        Contrasena: bcrypt.hashSync("123456"), //Calcular hash
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
