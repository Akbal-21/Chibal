import { SigInLayout } from "@/components";
import { getAdminData } from "@/db/superAdmin";
import { IAdmin } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";

interface FormData {
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Escuela: string;
}

interface Props {
    admin: IAdmin
}


const EditAdminPage: NextPage<Props> = ({ admin }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormData>();


    const onSubmit = (form: FormData) => {
        //setValue( "Nombre",  )
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
                                            <input type="text" className="input input-solid max-w-full" {...register("Nombre", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 5, message: "Mínimo 5 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Escuela
                                            <input type="text" className="input input-solid max-w-full" {...register("Apellidos", {
                                                required: "Este campo es obligatorio",
                                                minLength: { value: 5, message: "Mínimo 5 caracteres"  }
                                            })}/>
                                        </label>
                                    </div>
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

    if (slug === "new") {
        admin = {
            Escuela: null,
            Turno: null,
            Usuarios: {
                Nombres: "",
                Apellidos: ""
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
            admin
        }
    };
};

export default EditAdminPage;