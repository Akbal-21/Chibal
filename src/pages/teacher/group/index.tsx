import { FullScreenLoading, TeacherLayouth } from "@/components";
import { useGroup } from "@/hooks";
import { useLoginUser } from "@/store/auth";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const GroupPage = () => {
  const route = useRouter();

  const { user } = useLoginUser();
  const { escuela, isError, isLoading } = useGroup(
    `teacher/${user?.Usuarios_id}`,
  );

  const handleEdit = (Grupos_id: number) => {
    route.replace(`/teacher/group/${Grupos_id}`);
    return;
  };
  const handleDelete = (Grupos_id: number) => {
    console.log(Grupos_id);
  };

  return (
    <TeacherLayouth titel="Grupos">
      <div className="p-1 mt-20 relative flex justify-center items-center">
        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grupo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {escuela.map((group, index: number) => (
                  <tr
                    key={group.Grupos_id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.NombreGrupo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </TeacherLayouth>
  );
};

export default GroupPage;
