import { GetServerSideProps, NextPage } from "next";
import { getExerciseAnswers } from "@/db/teacher/answers";
import { TeacherLayouth } from "@/components";
import { IAnswer } from "@/interface";

interface Props {
  results: IAnswer[];
}

interface UsuarioResultados {
  usuario: string;
  aciertos: string[];
  fallos: string[];
}

const ExerciseAnswersPage: NextPage<Props> = ({ results }) => {
  const resultadosAgrupados: Record<string, UsuarioResultados> = {};

  results.forEach((row) => {
    const userId = row.Alumnos.Usuarios.Usuarios_id; // Supongo que hay un campo 'Id' en Usuarios
    if (!resultadosAgrupados[userId]) {
      resultadosAgrupados[userId] = {
        usuario: `${row.Alumnos.Usuarios.Apellidos} ${row.Alumnos.Usuarios.Nombres}`,
        aciertos: [],
        fallos: [],
      };
    }

    // Divide los caracteres en aciertos y fallos
    row.Incisos.Respuestas.forEach((result) => {
      if (result.Respuesta === row.Incisos.LoSolicitado) {
        resultadosAgrupados[userId].aciertos.push(
          result.Respuesta ? result.Respuesta : "",
        );
      } else {
        resultadosAgrupados[userId].fallos.push(
          result.Respuesta ? result.Respuesta : "",
        );
      }
    });
  });

  return (
    // Luego, renderiza la tabla con los datos agrupados
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
            {Object.keys(resultadosAgrupados).map((userId) => {
              const usuario = resultadosAgrupados[userId];
              const promedioPuntaje = (
                (usuario.aciertos.length /
                  (usuario.aciertos.length + usuario.fallos.length)) *
                100
              ).toFixed(2);

              return (
                <tr key={userId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {usuario.usuario}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {usuario.aciertos.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {usuario.fallos.join(", ")}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {promedioPuntaje}%
                  </td>
                </tr>
              );
            })}
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
