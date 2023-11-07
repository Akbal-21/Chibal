import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext, InternationalContext } from "@/context";
import { useGroup } from "@/hooks";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
const GroupPage = () => {
  const route = useRouter();

  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
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
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {ms.teacher.group.index.nameGroup}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {ms.teacher.group.index.action.title}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {escuela.map((group, index: number) => (
                    <tr
                      key={group.Grupos_id}
                      className="bg-white border-b  hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {group.NombreGrupo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-secondary m-1"
                          onClick={(e) => handleEdit(group.Grupos_id)}
                        >
                          <AiFillEdit /> {ms.teacher.group.index.action.edit}
                        </button>

                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error m-1"
                          onClick={(e) => handleDelete(group.Grupos_id)}
                        >
                          <AiFillDelete />{" "}
                          {ms.teacher.group.index.action.dellet}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 w-full">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-28" onClick={handleNewGroup}>
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                {ms.teacher.group.index.newGroup}
              </button>
            </div>
          </div>
        )}
      </div>
    </SigInLayout>
  );
};

export default GroupPage;
