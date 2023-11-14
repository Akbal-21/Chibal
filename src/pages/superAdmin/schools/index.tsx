import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { useSchool } from "@/hooks";
import { ISchoolName } from "@/interface";
import { useRouter } from "next/router";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const SchoolTablePage = () => {
  const { schools, isError, isLoading } = useSchool("superAdmin/schools");
  //console.log(schools);
  const route = useRouter();

  const handleDelete = async (Escuela_id: number) => {
    await chibalApi({
      method: "DELETE",
      url: "/superAdmin/schools",
      data: {
        School_id: Escuela_id,
      },
    });
    route.reload();
  };

  const handleNew = () => {
    console.log("niu");
    return route.replace("/superAdmin/schools/new");
  };
  const handleEdit = ( admin_id: number ) => {
    //console.log(admin_id)
    return route.replace( `/superAdmin/schools/${admin_id}`);
    
  };

  return (
    <>
      <SigInLayout titel="CRUD Maestro">
        <div>

          <div className="p-1 mt-20 relative flex justify-center items-center">
            {isLoading ? (
              <FullScreenLoading />
            ) : (
              <div className="grid grid-cols-custom-2">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <Table className="w-full text-sm text-left text-gray-500">
                    <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                      <Tr>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Escuela
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Administrador
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {schools.map((school, index: number) => (
                        <Tr
                          key={school.Escuela_id}
                          className="bg-white border-b  hover:bg-gray-50"
                        >
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {school.Nombre}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {!school.Administrador
                              ? "No asignado"
                              : school.Administrador.Usuarios.Nombres +
                                school.Administrador.Usuarios.Apellidos}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button className="btn btn-secondary m-1"
                            onClick={(e) => handleEdit(school.Escuela_id)}>
                              <AiFillEdit /> Editar
                            </button>

                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-error m-1"
                              onClick={(e) => handleDelete(school.Escuela_id)}
                            >
                              <AiFillDelete /> Elimiar
                            </button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </div>
                <div className="px-4 w-full">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button className="btn btn-primary w-28"
                  onClick={(e) => handleNew()}>
                    <b className="text-xl">
                      <AiOutlineUsergroupAdd />
                    </b>
                    Nueva escuela
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

export default SchoolTablePage;
