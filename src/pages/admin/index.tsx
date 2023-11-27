import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext, InternationalContext } from "@/context";
import { useTeacher } from "@/hooks/admin";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const AdminPage = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const { user } = useContext(AuthContext);
  console.log(user?.Usuarios_id)
  const { teachers, isError,isLoading } = useTeacher(`admin/${user?.Usuarios_id}`);
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
  const handleEdit = (teacher_id: number) => {
    //console.log(admin_id)
    return route.push(`/admin/teacher/${teacher_id}`);
  };

  return (
    <SigInLayout titel={ms.admin.welcome}>
      <div>
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
                        {ms.admin.name}
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {ms.admin.actions.title}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher, index: number) => {
                      if (teacher !== null) {
                        return (
                          <tr
                            key={teacher.Usuario_id}
                            className="bg-white border-b  hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {teacher.Usuarios.Nombres}{" "}
                              {teacher.Usuarios.Apellidos}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button
                                className="btn btn-secondary m-1"
                                onClick={(e) =>
                                  handleEdit(Number(teacher.Usuario_id))
                                }
                              >
                                <AiFillEdit /> {ms.admin.actions.edit}
                              </button>

                              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button
                                className="btn btn-error m-1"
                                onClick={(e) =>
                                  handleDelete(teacher.Usuario_id)
                                }
                              >
                                <AiFillDelete /> {ms.admin.actions.dellet}
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
              <div className="px-4 w-full">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="btn btn-primary w-36" onClick={handleNew}>
                  <b className="text-xl">
                    <AiOutlineUsergroupAdd />
                  </b>
                  {ms.admin.newTeacher}
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
