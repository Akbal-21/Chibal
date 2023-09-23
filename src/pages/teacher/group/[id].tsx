import { TeacherLayouth } from "@/components";
import { getDataGroup } from "@/db/teacher";
import { IGroup } from "@/interface";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  dataGroup: IGroup[];
}

const GroupPage: NextPage<Props> = ({ dataGroup }) => {
  console.log(dataGroup);

  return (
    <TeacherLayouth titel="Grupos">
      <div>
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
                    {dataGroup.map((group, index) => (
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
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeacherLayouth>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const dataGroup = await getDataGroup(id); // your fetch function here

  console.log(dataGroup);

  return {
    props: {
      dataGroup,
    },
  };
};

export default GroupPage;
