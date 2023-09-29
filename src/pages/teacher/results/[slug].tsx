import { GetServerSideProps, NextPage } from "next";
import { getExerciseAnswers } from "@/db/teacher/answers";
import { TeacherLayouth } from "@/components";
import { IAnswer } from "@/interface";

interface Props {
  results: IAnswer[];
}

const ExerciseAnswersPage: NextPage<Props> = ({ results }) => {
  return (
    <TeacherLayouth titel="Resultados de los Ejercicios">
      <div className="py-6">
        <h1 className="text-2xl font-semibold mb-4">
          Resultados del Ejercicio
        </h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre del Alumno
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Caracteres Acertados
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Caracteres Fallados
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Promedio del Puntaje
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((row, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.Alumnos.Usuarios.Apellidos}{" "}
                  {row.Alumnos.Usuarios.Nombres}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.Incisos.Respuestas.map((result) => (
                    <div>{result.Respuesta}</div>
                  ))}
                </td>
                {/*
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.RespuestasIncorrectas}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.PromedioPuntaje.toFixed(2)}
            </td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TeacherLayouth>
  );
};

export default ExerciseAnswersPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Obtenemos el valor de slug de los parámetros de la URL
  const { slug = "" } = query as { slug: string };
  console.log(slug);

  // Luego, puedes utilizar slug en tu consulta
  const x: IAnswer[] | undefined = await getExerciseAnswers(slug); // Asegúrate de especificar el tipo adecuado
  const results: IAnswer[] = JSON.parse(JSON.stringify(x));

  console.log(results);

  return {
    props: {
      results,
    },
  };
};
