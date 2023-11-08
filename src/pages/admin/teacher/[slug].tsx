import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { getAllTeachers } from "@/db/admin";
import { ITeacher } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";

interface Props {
  teacher: ITeacher;
}

interface FormData{
    Nombres?: string;
    Apellidos?: string;
    Correo?: string;
}


const TeacherTablePage: NextPage<Props> = ({ teacher }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>();

  //const [profe, setProfe] = useState<ITeacher>();

  useEffect( () => {
    if ( teacher ) {
        setValue('Nombres', teacher.Usuarios.Nombres);
        setValue('Apellidos', teacher.Usuarios.Apellidos);
        setValue('Correo', teacher.Usuarios.Correo);
      }
}, [] );

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
    await chibalApi({
      method: "POST",
      url: "/admin",
      data: { profe },
    });
    route.push( "/admin" );
    return;
  };

  const onSubmit = async (form: FormData) => {
    const values = getValues();
    const profe = {
      Usuario_id: teacher.Usuario_id,
      Usuarios:{
        Nombres: String(values.Nombres),
        Apellidos: String(values.Apellidos),
        Correo: String(values.Correo),
        Contrasena: teacher.Usuarios.Contrasena
      }
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
    <SigInLayout titel={`Administrador ${teacher.Usuario_id}`}>
            <div className="pt-11">
                <section className="bg-gray-2 reounded-xl">
                    <div className="p-8 shadow-lg">
                        <form className="space-y-4" onSubmit={ handleSubmit(onSubmit) } noValidate>
                            <div>
                                <div className="divider divider-horizontal">
                                    Editar administrador
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label>
                                            Nombre
                                            <input type="text" className="input input-solid max-w-full" {...register("Nombres", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 3, message: "Mínimo 3 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Apellidos
                                            <input type="text" className="input input-solid max-w-full" {...register("Apellidos", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 5, message: "Mínimo 5 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label>
                                            Correo
                                            <input type="text" className="input input-solid max-w-full" {...register("Correo", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 5, message: "Mínimo 5 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                    
                                </div>
                                <div className="mt-4">
                                    <button
                                    type="submit"
                                    className="rounded-lg btn btn-primary btn-block">
                                    Guardar
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

  if( slug === "new" ){
    teacher = {
      Usuarios:{
        Nombres: "",
        Apellidos: "",
        Correo: "",
        Contrasena: bcrypt.hashSync("123456") //Calcular hash
      }
    }
  }else{
    const datateacher = await getAllTeachers( slug );
    teacher = JSON.parse( JSON.stringify( datateacher ) );

  }

  if( !teacher ){
    return {
        redirect:{
            destination: "/admin",
            permanent: false
        }
    };
}

  return {
    props: {
      teacher,
    },
  };
};

export default TeacherTablePage;
