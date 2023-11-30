import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
import { useAdmin } from "@/hooks";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

const AdminTablePage = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
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
  const handleEdit = (admin_id: number) => {
    return route.push(`/superAdmin/admins/${admin_id}`);
  };

  const [componentKey, setComponentKey] = useState(0);
  const handleReloadComponent = () => {
    // Incrementar la clave del componente para forzar su recarga
    setComponentKey((prevKey) => prevKey + 1);
  };
  return (
    <>
      <SigInLayout
        titel={ms.superAdmin.admin.index.title}
        onReload={handleReloadComponent}
      >
        <div>
          <div className="p-1 mt-20 relative flex justify-center items-center">
            {isLoading ? (
              <FullScreenLoading />
            ) : (
              <div className="grid grid-cols-custom-2">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <Table
                    className="w-full text-sm text-left text-gray-500 "
                    key={componentKey}
                  >
                    <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                      <Tr>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.admin.index.name}
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.admin.index.school}
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.admin.index.actions.title}
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {admins.map((admin, index: number) => {
                        if (admin.Usuarios !== null) {
                          return (
                            <Tr
                              key={admin.Usuario_id}
                              className="bg-white border-b  hover:bg-gray-50"
                            >
                              <Td className="px-6 py-4 whitespace-nowrap">
                                {index + 1}
                              </Td>
                              <Td className="px-6 py-4 whitespace-nowrap">
                                {admin.Usuarios.Nombres}{" "}
                                {admin.Usuarios.Apellidos}
                              </Td>
                              <Td className="px-6 py-4 whitespace-nowrap">
                                {admin.Escuela
                                  ? admin.Escuela.Nombre
                                  : "Asignar escuela"}
                              </Td>
                              <Td className="px-6 py-4 whitespace-nowrap">
                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                <button
                                  className="btn btn-secondary m-1"
                                  onClick={(e) =>
                                    handleEdit(Number(admin.Usuario_id))
                                  }
                                >
                                  <AiFillEdit />{" "}
                                  {ms.superAdmin.admin.index.actions.edit}
                                </button>

                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                <button
                                  className="btn btn-error m-1"
                                  onClick={(e) =>
                                    handleDelete(admin.Usuario_id)
                                  }
                                >
                                  <AiFillDelete />{" "}
                                  {ms.superAdmin.admin.index.actions.dellet}
                                </button>
                              </Td>
                            </Tr>
                          );
                        }
                      })}
                    </Tbody>
                  </Table>
                </div>
                <div className="px-4 w-full grid">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button
                    className="btn btn-primary w-full"
                    onClick={handleNew}
                  >
                    <b className="text-xl">
                      <AiOutlineUsergroupAdd />
                    </b>
                    {ms.superAdmin.admin.index.newAdmin}
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
