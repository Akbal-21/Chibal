import { FullScreenLoading, SuperAdminLayout } from "@/components";
import { useAdmin } from "@/hooks";
import { AiFillDelete, AiFillEdit, AiOutlineUsergroupAdd } from "react-icons/ai";


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

          <div className="p-1 mt-20 relative flex justify-center items-center">
        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <div className="grid grid-cols-custom-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Escuela
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, index: number) => (
                    <tr
                      key={admin.Usuario_id}
                      className="bg-white border-b  hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {admin.Usuarios.Nombres}{" "}{admin.Usuarios.Apellidos}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {admin.Escuela?.Nombre}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-secondary m-1"
                          
                        >
                          <AiFillEdit /> Editar
                        </button>

                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error m-1"
                          
                        >
                          <AiFillDelete /> Elimiar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 w-full">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-36" >
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                Nuevo Administrador
              </button>
            </div>
          </div>
        )}
      </div>
        </div>
      </SuperAdminLayout>
    </>
  );
};


export default TeacherTablePage;
