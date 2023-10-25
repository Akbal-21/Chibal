import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { getSchoolData } from "@/db/superAdmin";
import { ISchoolName } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props{
    school: ISchoolName
}

interface FormData{
    nombre: string,
    admin: string
}

const EditSchoolPage: NextPage<Props> = ({ school }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormData>();

    useEffect( () => {
        if ( school ) {
            setValue('nombre', school.Nombre);
            
          }
    }, [] );

    const [escuela, setEscuela] = useState<ISchoolName>();

    const handleEdit = async ( escul: ISchoolName ) => {
        console.log(escul);
        await chibalApi({
            method: "PUT",
            url: "/superAdmin/schools",
            data: {
                escul
            }
          });
        const route = useRouter();
        return route.replace( "/superAdmin/schools" );
    }

    const handleNew = async ( escul: ISchoolName ) => {
        console.log(escul);
        await chibalApi({
            method: "POST",
            url: "/superAdmin/schools",
            data: {
                escul
            }
          });
        const route = useRouter();
        return route.replace( "/superAdmin/schools" );
    }

    const onSubmit = (form: FormData) => {
        const values = getValues();
        setEscuela({
            Escuela_id: school.Escuela_id,
            Nombre: values.nombre
        });
        if(escuela){
            if( escuela.Escuela_id ){
                console.log("Editar")
                handleEdit( escuela );
            }else{
                console.log("Crear")
                handleNew( escuela );
            }
            //saveAdmin( administrator ); //<--- Esto va en API
        }
    }

    return (
        <SigInLayout titel={`Escuela ${school.Escuela_id}`}>
            <div className="pt-11">
            <section className="bg-gray-2 reounded-xl">
                    <div className="p-8 shadow-lg">
                        <form className="space-y-4" onSubmit={ handleSubmit(onSubmit) } noValidate>
                            <div>
                                <div className="divider divider-horizontal">
                                    Editar escuela
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label>
                                            Nombre
                                            <input type="text" className="input input-solid max-w-full" {...register("nombre", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 3, message: "Mínimo 3 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Administrador
                                            <input type="text" className="input input-solid max-w-full" {...register("admin", {
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

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const { slug = "" } = query;
    let scul: ISchoolName | null;
  
    if( slug === "new" ){
      scul = {
        Nombre: ""
      }
    }else{
        const sculData = await getSchoolData( slug.toString() );
        console.log(sculData);
        scul = JSON.parse( JSON.stringify( sculData ) );
    }

    if( !scul ){
        return {
            redirect:{
                destination: "/superAdmin/schools",
                permanent: false
            }
        };
    }

    return{
        props:{
            school: scul
        }
    };

  }

export default EditSchoolPage;