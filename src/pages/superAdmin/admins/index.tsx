import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { useAdmin } from "@/hooks";
import { useRouter } from "next/router";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const AdminTablePage = () => {
  const { admins, isError, isLoading } = useAdmin("superAdmin");

  const handleDelete = async (Usuario_id: number | undefined) => {
    await chibalApi({
      method: "DELETE",
      url: "/superAdmin",
      data: {
        Usuario_id,
      },
    });
    route.reload();
  };

  const route = useRouter();
  const handleNew = () => {
      return route.push("/superAdmin/admins/new");
    };
  const handleEdit = ( admin_id: number ) => {
    return route.push( `/superAdmin/admins/${admin_id}`);
    
  };
    
  return (
    <>
      <SigInLayout titel="CRUD super administrador">
        <div>
          <div className="p-1 mt-20 relative flex justify-center items-center">
            {isLoading ? (
              <FullScreenLoading />
            ) : (
              <div className="grid grid-cols-custom-2">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <Table className="w-full text-sm text-left text-gray-500 ">
                    <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                      <Tr>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nombre
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Escuela
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {admins.map((admin, index: number) => {
                        if( admin.Usuarios !== null ){
                          return (
                            <Tr
                            key={admin.Usuario_id}
                            className="bg-white border-b  hover:bg-gray-50"
                            >
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {admin.Usuarios.Nombres} {admin.Usuarios.Apellidos}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {admin.Escuela ? admin.Escuela.Nombre : "Asignar escuela"}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button className="btn btn-secondary m-1" onClick={(e) => handleEdit( Number(admin.Usuario_id) )}>
                              <AiFillEdit /> Editar
                            </button>

                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-error m-1"
                              onClick={(e) => handleDelete(admin.Usuario_id)}
                            >
                              <AiFillDelete /> Elimiar
                            </button>
                          </Td>
                        </Tr>
                        )
                      }
                      }
                      )}
                      </Tbody>
                  </Table>
                </div>
                <div className="px-4 w-full">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button className="btn btn-primary w-36" onClick={handleNew}>
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
      </SigInLayout>
    </>
  );
};

export default AdminTablePage;
