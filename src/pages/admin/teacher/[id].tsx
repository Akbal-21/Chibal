import { chibalApi } from "@/api";
import { AdminLayouth } from "@/components";
import { getAllTeachers } from "@/db/admin";
import { ITeacher } from "@/interface";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  dataTeachers: ITeacher[];
}

const TeacherTablePage: NextPage<Props> = ({ dataTeachers }) => {
  const handleEdith = (id: number) => {
    console.log(id);
  };

  const handleDelete = async (Usuario_id: number) => {
    const data = await chibalApi({
      method: "DELETE",
      url: "/admin",
      data: { Usuario_id },
    });
    console.log(data);

    // console.log(Usuario_id);
  };

  return (
    <>
      <AdminLayouth titel="CRUD Maestro">
        <div>
          <div className="text-center">
            <h1 className="text-4xl">Escuela: Hola</h1>
          </div>

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
                          Nombre del profesor
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTeachers.map((teacher, index) => {
                        return (
                          <tr
                            key={teacher.Usuario_id}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {teacher.Usuarios.Nombres}{" "}
                              {teacher.Usuarios.Apellidos}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <div>
                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                <button
                                  className="btn btn-secondary m-1"
                                  onClick={(e) =>
                                    handleEdith(teacher.Usuario_id)
                                  }
                                >
                                  Editar
                                </button>
                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                                <button
                                  className="btn btn-error"
                                  onClick={(e) =>
                                    handleDelete(teacher.Usuario_id)
                                  }
                                >
                                  Eliminar
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayouth>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id = "" } = params as { id: string };
  const dataTeachers = await getAllTeachers(id);

  return {
    props: {
      dataTeachers,
    },
  };
};

export default TeacherTablePage;
