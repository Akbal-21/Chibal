import { AddStudent, SigInLayout, TableStudents } from "@/components";
import { GroupContext, InternationalContext } from "@/context";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { en, es } from "@/messages";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}

const editStudentPage: FC<Props> = ({ slug, dataGroup }) => {
  const { addStudent, students, resetStudents } = useContext(GroupContext);
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

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

  return (
    <SigInLayout titel="Agregar Alumnos">
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <AddStudent slug={slug} />
            <div>
              {students.length <= 0 ? (
                <div>
                  <div className="divider divider-horizontal">
                    {ms.teacher.group.slug.index.students}
                  </div>
                  <div className="grid gap-4 w-full">
                    <b className="text-center text-xl">
                      {ms.teacher.group.slug.index.addStudentsText}
                    </b>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="divider divider-horizontal">
                    {ms.teacher.group.slug.index.listOfStudent.title}
                  </div>

                  <TableStudents />
                </div>
              )}
              <div>
                <div className="divider divider-horizontal">
                  {ms.teacher.group.slug.index.saveStudent}
                </div>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn btn-secondary w-full"
                  onClick={handleSave}
                >
                  {ms.teacher.group.slug.index.save}
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
