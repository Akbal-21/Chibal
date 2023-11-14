import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { useTeacher } from "@/hooks/admin";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const AdminPage = () => {
  const { teachers, isError, isLoading } = useTeacher("admin");
  //console.log(teachers);
  const route = useRouter();

  const handleDelete = async (Usuario_id: number | undefined) => {
    await chibalApi({
      method: "DELETE",
      url: "/admin",
      data: {
        Usuario_id,
      },
    });
    route.reload();
  };

  const handleNew = () => {
      return route.push("/admin/teacher/new");
    };
  const handleEdit = ( teacher_id: number ) => {
    //console.log(admin_id)
    return route.push( `/admin/teacher/${teacher_id}`);
    
  };

  return (
    <SigInLayout titel={"Bienvenido"}>
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
                          Acciones
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {teachers.map((teacher, index: number) => {
                        if( teacher !== null ){
                          return (
                            <Tr
                            key={teacher.Usuario_id}
                            className="bg-white border-b  hover:bg-gray-50"
                            >
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {teacher.Usuarios.Nombres} {teacher.Usuarios.Apellidos}
                          </Td>
                          
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button className="btn btn-secondary m-1" onClick={(e) => handleEdit( Number(teacher.Usuario_id) )}>
                              <AiFillEdit /> Editar
                            </button>

                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-error m-1"
                              onClick={(e) => handleDelete(teacher.Usuario_id)}
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
  );
};

export default AdminPage;
