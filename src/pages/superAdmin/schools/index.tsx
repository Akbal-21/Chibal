import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
import { useSchool } from "@/hooks";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

const SchoolTablePage = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
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
    return route.push("/superAdmin/schools/new");
  };
  const handleEdit = (admin_id: number) => {
    //console.log(admin_id)
    return route.push(`/superAdmin/schools/${admin_id}`);
  };

  const [componentKey, setComponentKey] = useState(0);
  const handleReloadComponent = () => {
    // Incrementar la clave del componente para forzar su recarga
    setComponentKey((prevKey) => prevKey + 1);
  };
  return (
    <>
      <SigInLayout
        titel={ms.superAdmin.school.index.title}
        onReload={handleReloadComponent}
      >
        <div>
          <div className="p-1 mt-20 relative flex justify-center items-center">
            {isLoading ? (
              <FullScreenLoading />
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-custom-2 w-full">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <Table
                    className="w-full text-sm text-left text-gray-500"
                    key={componentKey}
                  >
                    <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                      <Tr>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.school.index.school}
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.school.index.admin}
                        </Th>
                        <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ms.superAdmin.school.index.actions.title}
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
                              ? ms.superAdmin.school.index.noAsigment
                              : school.Administrador.Usuarios.Nombres +
                                school.Administrador.Usuarios.Apellidos}
                          </Td>
                          <Td className="px-6 py-4 whitespace-nowrap">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-secondary m-1"
                              onClick={(e) => handleEdit(school.Escuela_id)}
                            >
                              <AiFillEdit />{" "}
                              {ms.superAdmin.school.index.actions.edit}
                            </button>

                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-error m-1"
                              onClick={(e) => handleDelete(school.Escuela_id)}
                            >
                              <AiFillDelete />{" "}
                              {ms.superAdmin.school.index.actions.dellet}
                            </button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </div>
                <div className="px-4 w-full grid">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button
                    className="btn btn-primary w-full"
                    onClick={(e) => handleNew()}
                  >
                    <b className="text-xl">
                      <AiOutlineUsergroupAdd />
                    </b>
                    {ms.superAdmin.school.index.newSchool}
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
