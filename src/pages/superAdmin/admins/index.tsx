import { chibalApi } from "@/api";
import { SuperAdminLayout } from "@/components";
import { getAllTeachers } from "@/db/admin";
import { useAdmin } from "@/hooks";
import { IAdmin } from "@/interface/admin";
import { GetServerSideProps, NextPage } from "next";


const TeacherTablePage = () => {
    const { admins, isError, isLoading } = useAdmin("superAdmin");
        console.log(admins);
        

  return (
    <>
      <SuperAdminLayout titel="CRUD Maestro">
        <div>
          <div className="text-center">
            <h1 className="text-4xl">Escuela: Hola</h1>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Nombre del administrador
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Escuela
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Turno
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                       {admins.map((admin, index) => {
                        return (
                          <tr
                            key={admin.Usuario_id}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {admin.Usuarios.Nombres}{" "}
                              {admin.Usuarios.Apellidos}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {admin.Escuela?.Nombre}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {admin.Turno?.Horario}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <div>
                                
                                <button
                                  className="btn btn-secondary m-1"
                                  
                                >
                                  Editar
                                </button>
                                
                                <button
                                  className="btn btn-error"
                                  
                                >
                                  Eliminar
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SuperAdminLayout>
    </>
  );
};


export default TeacherTablePage;
