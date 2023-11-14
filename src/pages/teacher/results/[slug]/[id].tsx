import { CheckResults, SigInLayout } from "@/components";
import { getAllLinesByStudent } from "@/db/teacher";
import { LineByStudentID } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { redirect } from "next/navigation";
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';

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
          <Table className="w-full text-sm text-left text-gray-500 ">
            <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
              <Tr>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dibujo del alumno
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lo detectado
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lo solicitado
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Puntaje
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ver resultados
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
