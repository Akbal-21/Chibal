import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { getAllAdminNames, getSchoolData } from "@/db/superAdmin";
import { IAdminList, ISchoolAdmin } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props{
    school: ISchoolAdmin
    admins: IAdminList[]
}

interface FormData{
    idEscuela?: number,
    nombreEscuela: string,
    adminId?: number,
}

const EditSchoolPage: NextPage<Props> = ({ school, admins }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormData>();

    useEffect( () => {
        
        console.log(school.Administrador_id);
        if ( school.Administrador_id ) {

            setValue( 'idEscuela', school.Escuela_id );
            setValue( 'nombreEscuela', school.Nombre );
            setValue( 'adminId', school.Administrador_id );
            setAdministrador( {
                idAdministrador: school.Administrador_id,
                nombreAdministrador: `${school.Administrador?.Usuarios.Nombres} ${school.Administrador?.Usuarios.Apellidos}`
            } );
            console.log(administrador);
        }
    }, [] );

    const [administrador, setAdministrador] = useState<{
        nombreAdministrador?: string;
        idAdministrador: number;
    }>({
        nombreAdministrador: "",
        idAdministrador: 0
    });

    const route = useRouter();
    const handleEdit = async (  ) => {
        const values = getValues();
        await chibalApi({
            method: "PUT",
            url: "/superAdmin/schools",
            data: {
                Escuela_id: values.idEscuela,
                Nombre: values.nombreEscuela,
                Administrador_id: administrador.idAdministrador
            }
          });
        return route.replace( "/superAdmin/schools" );
    }

    const handleNew = async () => {
        const values = getValues();
        await chibalApi({
            method: "POST",
            url: "/superAdmin/schools",
            data: {
                Nombre: values.nombreEscuela,
            }
          });
        return route.replace( "/superAdmin/schools" );
    }

    const onSubmit = (form: FormData) => {
        setValue( "adminId", administrador.idAdministrador );
        
        const values = getValues();

        console.log(values);

        if( values.idEscuela ){
            console.log("Editar");
            handleEdit();
        }else{
            console.log("Crear");
            handleNew();
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
                                            <input type="text" className="input input-solid max-w-full" {...register("nombreEscuela", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 3, message: "Mínimo 3 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                    <div className="dropdown w-full">
                                        {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                                        <label className="btn btn-solid-primary" tabIndex={0}>
                                            {!administrador.nombreAdministrador
                                            ? "Seleccione un administrador"
                                            : administrador.nombreAdministrador}
                                        </label>
                                        <div className="w-full">
                                            <ul className="dropdown-menu w-full">
                                            {admins.map((admin) => {
                                                return (
                                                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                                                <li
                                                    key={admin.Usuario_id}
                                                    className="dropdown-item"
                                                    onClick={() =>
                                                    setAdministrador( {
                                                        nombreAdministrador: `${admin.Usuarios.Nombres} ${admin.Usuarios.Apellidos}`,
                                                        idAdministrador: admin.Usuario_id
                                                    } )
                                                    }
                                                >
                                                    {`${admin.Usuarios.Nombres} ${admin.Usuarios.Apellidos}`}
                                                </li>
                                                );
                                            })}
                                            </ul>
                                        </div>
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
    let scul: ISchoolAdmin | null;

    const adminsData = await getAllAdminNames();
    const admins: IAdminList[] | null = JSON.parse( JSON.stringify( adminsData ) );

    if( slug === "new" ){
      scul = {
        Nombre: ""
      }
    }else{
        const sculData = await getSchoolData( slug.toString() );
        scul = JSON.parse( JSON.stringify( sculData ) );
    }

    if( !scul && !admins ){
        return {
            redirect:{
                destination: "/superAdmin/schools",
                permanent: false
            }
        };
    }

    return{
        props:{
            school: scul,
            admins
        }
    };

  }

export default EditSchoolPage;