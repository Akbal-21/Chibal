import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
import { getAdminData } from "@/db/superAdmin";
import { IAdminInsert, ISchoolName } from "@/interface";
import { en, es } from "@/messages";
import bcrypt from "bcryptjs";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
interface FormData {
  Nombres?: string;
  Apellidos?: string;
  Correo?: string;
  Escuela?: ISchoolName;
}
interface Props {
  admin: IAdminInsert;
}

const EditAdminPage: NextPage<Props> = ({ admin }) => {
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

    const route = useRouter();

  useEffect(() => {
    if (admin) {
      setValue("Nombres", admin.Nombres);
      setValue("Apellidos", admin.Apellidos);
      setValue("Correo", admin.Correo);
    }
  }, []);


    const handleEdit = async ( administrator: IAdminInsert ) => {
        await chibalApi({
            method: "PUT",
            url: "/superAdmin",
            data: {
                administrator
            }
          });
        return route.replace( "/superAdmin/admins" );
    }

    const handleNew = async ( administrator: IAdminInsert ) => {
        await chibalApi({
            method: "POST",
            url: "/superAdmin",
            data: {
                administrator
            }
          });
        route.push( "/superAdmin/admins" );
        return;
    }

    const onSubmit = async (form: FormData) => {
        const values = getValues();
        const administrator = {
            Usuarios_id: admin.Usuarios_id,
            Nombres: String(values.Nombres),
            Apellidos: String(values.Apellidos),
            Correo: String(values.Correo),
            Contrasena: admin.Contrasena
        };
        //setEscuela(admin_school);
        //? Aquí se hace el insert en base de datos?
        if( admin.Usuarios_id ){
            console.log("Editar")
            handleEdit( administrator );
        }else{
            console.log("Crear")
            handleNew( administrator );
        }

    };

  return (
    <SigInLayout
      titel={`${ms.superAdmin.admin.slug.admin} ${admin.Usuarios_id}`}
    >
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
                  {ms.superAdmin.admin.slug.editAdmin}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label>
                      {ms.superAdmin.admin.slug.name}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Nombres", {
                          required: ms.superAdmin.admin.slug.required,
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
                      {ms.superAdmin.admin.slug.surname}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Apellidos", {
                          required: ms.superAdmin.admin.slug.required,
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
                      {ms.superAdmin.admin.slug.email}
                      <input
                        type="text"
                        className="input input-solid max-w-full"
                        {...register("Correo", {
                          required: ms.superAdmin.admin.slug.required,
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
                    {ms.superAdmin.admin.slug.save}
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
  const { slug = "" } = query;

  let admin: IAdminInsert | null;

  if (slug === "new") {
    admin = {
      Nombres: "",
      Apellidos: "",
      Correo: "",
      Contrasena: bcrypt.hashSync("123456"), //Calcular hash
    };
  } else {
    const datadmin = await getAdminData(slug.toString());
    admin = JSON.parse(JSON.stringify(datadmin));
    //console.log(admin)
    if (!admin?.Usuarios_id) {
      return {
        redirect: {
          destination: "/superAdmin/admins",
          permanent: false,
        },
      };
    }
  }

  if (!admin) {
    return {
      redirect: {
        destination: "/superAdmin/admins",
        permanent: false,
      },
    };
  }

  return {
    props: {
      admin,
    },
  };
};

export default EditAdminPage;
