import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { useGroup } from "@/hooks";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const GroupPage = () => {
  const route = useRouter();

  const { user } = useContext(AuthContext);
  const { escuela, isLoading } = useGroup(`teacher/${user?.Usuarios_id}`);

  const handleEdit = (Grupos_id: number) => {
    route.replace(`/teacher/group/${Grupos_id}`);
  };

  const handleNewGroup = () => {
    route.replace("/teacher/group/new");
    return;
  };

  const handleDelete = async (Grupos_id: number) => {
    const { data } = await chibalApi({
      method: "DELETE",
      url: "/teacher/newGroup",
      data: Grupos_id,
    });
    route.reload();
    console.log(data);
  };

  return (
    <SigInLayout titel="Grupos">
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
                      Grupo
                    </Th>
                    <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {escuela.map((group, index: number) => (
                    <Tr
                      key={group.Grupos_id}
                      className="bg-white border-b  hover:bg-gray-50"
                    >
                      <Td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                        {group.NombreGrupo}
                      </Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-secondary m-1"
                          onClick={(e) => handleEdit(group.Grupos_id)}
                        >
                          <AiFillEdit /> Editar
                        </button>

                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error m-1"
                          onClick={(e) => handleDelete(group.Grupos_id)}
                        >
                          <AiFillDelete /> Elimiar grupo
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
            <div className="px-4 w-full">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-28" onClick={handleNewGroup}>
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                Nuevo Grupo
              </button>
            </div>
          </div>
        )}
      </div>
    </SigInLayout>
  );
};

export default GroupPage;
