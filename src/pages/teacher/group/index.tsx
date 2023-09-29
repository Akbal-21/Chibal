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
  };
  const handleDelete = (Grupos_id: number) => {
    console.log(Grupos_id);
  };

  return (
    <TeacherLayouth titel="Grupos">
      <div>
        {isLoading ? (
          <FullScreenLoading />
        ) : (
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
                          Grupo
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {escuela.map((group, index: number) => (
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          key={group.Grupos_id}
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {group.NombreGrupo}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </TeacherLayouth>
  );
};

export default GroupPage;
