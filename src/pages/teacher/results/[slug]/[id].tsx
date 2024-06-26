import { CheckResults, SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
import { getAllLinesByStudent } from "@/db/teacher";
import { LineByStudentID } from "@/interface";
import { en, es } from "@/messages";
import { GetServerSideProps, NextPage } from "next";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';

interface Props {
  slug: string;
  id: string;
  lineByStudent: LineByStudentID[];
}

const AlumnoResults: NextPage<Props> = ({ id, lineByStudent, slug }) => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  const router = useRouter();

  const handleBack = () => {
    router.push(`/teacher/results/${slug}`);
  };
  const [componentKey, setComponentKey] = useState(0);
  const handleReloadComponent = () => {
    // Incrementar la clave del componente para forzar su recarga
    setComponentKey((prevKey) => prevKey + 1);
  };
  return (
    <SigInLayout titel="Resultados de los Ejercicios" onReload={handleReloadComponent}>
      <div className=" mt-7">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table className="w-full text-sm text-left text-gray-500 " key={componentKey}>
            <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
              <Tr>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.studentDraw}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.asDetected}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.asRequest}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.score}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.update}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {lineByStudent.map((lineStudent, index) => (
                <CheckResults
                  lineStudent={lineStudent}
                  id_Student={id}
                  key={lineStudent.Inciso_id}
                />
              ))}
            </Tbody>
          </Table>
        </div>
        <div className="grid grid-cols-1 p-4">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="btn btn-primary font-bold m-1 btn-block"
            onClick={() => handleBack()}
          >
            {ms.teacher.exercise.slug.return}
          </button>
        </div>
      </div>
    </SigInLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);
  const { slug, id } = query as { slug: string; id: string };

  if (!slug || !id) {
    redirect("/teacher/results");
  }

  const lineByStudent: LineByStudentID[] | undefined =
    await getAllLinesByStudent(slug, id); // your fetch function here
  console.log(lineByStudent);

  if (!lineByStudent) {
    redirect("/teacher/results");
  }

  return {
    props: {
      slug,
      id,
      lineByStudent,
    },
  };
};

export default AlumnoResults;
