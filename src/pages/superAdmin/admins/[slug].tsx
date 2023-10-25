import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { getAdminData, getSchools, saveAdmin, getAdminSchool } from "@/db/superAdmin";
import { IAdmin, IAdminInsert, ISchoolName } from "@/interface";
import schools from "@/pages/api/superAdmin/schools";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    Nombres?: string;
    Apellidos?: string;
    Correo?: string;
    Escuela?: ISchoolName;
}

interface Props {
    admin: IAdminInsert
    schools: ISchoolName[]
    admin_school: ISchoolName
}


const EditAdminPage: NextPage<Props> = ({ admin, schools, admin_school }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormData>();

    const [administrator, setAdministrator] = useState<IAdminInsert>();
    const [escuela, setEscuela] = useState<ISchoolName>();


    useEffect( () => {
        if (admin && schools && admin_school) {
            setValue('Nombres', admin.Nombres);
            setValue('Apellidos', admin.Apellidos);
            setValue('Correo', admin.Correo);
            //setValue('Escuela', Escuela ? Escuela : undefined);
          }
    }, [] );


    const handleEdit = async ( administrator: IAdminInsert ) => {
        await chibalApi({
            method: "PUT",
            url: "/superAdmin",
            data: {
                administrator
            }
          });
        const route = useRouter();
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
        const route = useRouter();
        return route.replace( "/superAdmin/admins" );
    }

    const onSubmit = (form: FormData) => {
        const values = getValues();
        setAdministrator({
            Usuarios_id: admin.Usuarios_id,
            Nombres: String(values.Nombres),
            Apellidos: String(values.Apellidos),
            Correo: String(values.Correo),
            Contrasena: admin.Contrasena
            //Escuela: escuela
        });
        //setEscuela(admin_school);
        //? Aquí se hace el insert en base de datos?
        if(administrator){
            if( administrator.Usuarios_id ){
                console.log("Editar")
                handleEdit( administrator );
            }else{
                console.log("Crear")
                handleNew( administrator );
            }
            //saveAdmin( administrator ); //<--- Esto va en API
        }
        //console.log({ administrator, escuela })
    };

    
    return(
        <SigInLayout titel={`Administrador ${admin.Usuarios_id}`}>
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
                                    <div>
                                        <div className="dropdown w-full">
                                            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                                            <label className="btn btn-solid-primary" tabIndex={0}>
                                                Escuela
                                            </label>
                                            <ul className="dropdown-menu">
                                                {schools.map( ( school ) => {
                                                    return(
                                                        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
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

    let admin: IAdminInsert | null;
    let schools: ISchoolName[];
    let admin_school: ISchoolName | null;

    
    if (slug === "new") {
        admin = {
            Nombres: "",
            Apellidos: "",
            Correo: "",
            Contrasena: "123456" //Calcular hash
        }
        admin_school = null;
    } else {
        const datadmin = await getAdminData( slug.toString() );
        admin = JSON.parse( JSON.stringify( datadmin ) );
        //console.log(admin)
        if(!admin?.Usuarios_id){
            return {
                redirect:{
                    destination: "/superAdmin/admins",
                    permanent: false
                }
            };
        }
        admin_school = await getAdminSchool(admin.Usuarios_id);
    }
    schools = await getSchools();
    
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
            schools,
            admin_school
        }
    };
};

export default EditAdminPage;