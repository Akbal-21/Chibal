import { AddStudent, SigInLayout, TableStudents } from "@/components";
import { GroupContext } from "@/context";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}

const editStudentPage: NextPage<Props> = ({ slug, dataGroup }) => {
  const { addStudent, students, resetStudents } = useContext(GroupContext);
  const router = useRouter();

  useEffect(() => {
    if (students.length === 0) {
      resetStudents();
      for (const key in dataGroup[0].Alumnos) {
        const student = dataGroup[0].Alumnos[key].Usuarios;

        addStudent(student);
      }
    }
  }, []);

  const handleSave = () => {
    router.replace(`/teacher/group/${slug}`);
  };

  console.log(slug, dataGroup);

  return (
    <SigInLayout titel="Agregar Alumnos">
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <AddStudent slug={slug} />
            <div>
              {students.length <= 0 ? (
                <div>
                  <div className="divider divider-horizontal">Alumnos</div>
                  <div className="grid gap-4 w-full">
                    <b className="text-center text-xl">
                      Agregue Alumnos por favor
                    </b>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="divider divider-horizontal">
                    Lista de Alumnos
                  </div>

                  <TableStudents />
                </div>
              )}
              <div>
                <div className="divider divider-horizontal">
                  Guardar Alumnos
                </div>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn btn-secondary w-full"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SigInLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const { data } = await  // your fetch function here
  const { slug = "" } = query as { slug: string };

  let dataGroup: IDataGroup[] | undefined;

  if (slug === "new") {
    dataGroup = [];
  } else {
    dataGroup = await getDataGroup(slug);
  }

  return {
    props: {
      slug,
      dataGroup,
    },
  };
};

export default editStudentPage;
