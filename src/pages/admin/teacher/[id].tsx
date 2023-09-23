import { AdminLayouth } from "@/components";
import { getAllTeachers } from "@/db/admin";
import { ISchool } from "@/interface";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  groupInformation: ISchool;
}

const TeacherTablePage: NextPage<Props> = ({ groupInformation }) => {
  if (!groupInformation.Escuela) {
    return <h3>Lo sentimos datos no validos</h3>;
  }
  const { Nombre, Grupos } = groupInformation.Escuela;

  return (
    <>
      <AdminLayouth titel="CRUD Maestro">
        <div>
          <div className="text-center">
            <h1 className="text-4xl">Escuela: {Nombre}</h1>
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
                          Grupo
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Nombre del profesor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Grupos.map((grupo, index) => {
                        return (
                          <tr
                            key={grupo.Grupos_id}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {grupo.NombreGrupo}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {grupo.Maestros?.Usuarios.Nombres}{" "}
                              {grupo.Maestros?.Usuarios.Apellidos}
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
  const groupInformation = await getAllTeachers(id);

  return {
    props: {
      groupInformation,
    },
  };
};

export default TeacherTablePage;
