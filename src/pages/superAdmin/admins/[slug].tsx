import { SigInLayout } from "@/components";
import { getAdminData, getSchools } from "@/db/superAdmin";
import { IAdmin, ISchoolName } from "@/interface";
import schools from "@/pages/api/superAdmin/schools";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    Nombre?: string;
    Apellidos?: string;
    Correo?: string;
    Escuela?: string;
}

interface Props {
    admin: IAdmin
    schools: ISchoolName[]
}


const EditAdminPage: NextPage<Props> = ({ admin, schools }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormData>();

    const [administrator, setAdministrator] = useState<IAdmin>();
    const [escuela, setEscuela] = useState<ISchoolName>();


    const onSubmit = (form: FormData) => {
        setValue( "Nombre", administrator?.Usuarios.Nombres );
        setValue( "Apellidos", administrator?.Usuarios.Apellidos );
        setValue( "Correo", administrator?.Usuarios.Correo );
        setValue( "Escuela", administrator?.Escuela?.Nombre );

        //? Aquí se hace el insert en base de datos?
        console.log({ form, escuela })
    };

    
    return(
        <SigInLayout titel={`Administrador ${admin.Usuario_id}`}>
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
                                            <input type="text" className="input input-solid max-w-full" {...register("Nombre", {
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
                                    <div>
                                        <div className="dropdown w-full">
                                            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                                            <label className="btn btn-solid-primary" tabIndex={0}>
                                                Escuela
                                            </label>
                                            <ul className="dropdown-menu">
                                                {schools.map( ( school ) => {
                                                    return(
                                                        <li key={school.Escuela_id}
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setEscuela({
                                                                Escuela_id: school.Escuela_id,
                                                                Nombre: school.Nombre
                                                            });
                                                        }}
                                                        >{ school.Nombre }</li>
                                                    );
                                                } ) }
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { slug = "" } = query;

    let admin: IAdmin | null;
    let schools: ISchoolName[];

    schools = await getSchools();

    if (slug === "new") {
        admin = {
            Escuela: null,
            Turno: null,
            Usuarios: {
                Nombres: "",
                Apellidos: "",
                Correo: ""
            }
        }
    } else {
        const datadmin = await getAdminData( slug.toString() );
        admin = JSON.parse( JSON.stringify( datadmin ) );
    }

    if( !admin ){
        return {
            redirect:{
                destination: "/superAdmin/admins",
                permanent: false
            }
        };
    }

    return{
        props:{
            admin,
            schools
        }
    };
};

export default EditAdminPage;