import { CheckResults, SigInLayout } from "@/components";
import { getAllLinesByStudent } from "@/db/teacher";
import { LineByStudentID } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {
  slug: string;
  id: string;
  lineByStudent: LineByStudentID[];
}

const AlumnoResults: NextPage<Props> = ({ id, lineByStudent, slug }) => {
  return (
    <SigInLayout titel="Resultados de los Ejercicios">
      <div className=" mt-7">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dibujo del alumno
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lo detectado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lo solicitado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Puntaje
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ver resultados
                </th>
              </tr>
            </thead>
            <tbody>
              {lineByStudent.map((lineStudent, index) => (
                <CheckResults
                  lineStudent={lineStudent}
                  id_Student={id}
                  key={lineStudent.Inciso_id}
                />
              ))}
            </tbody>
          </table>
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
