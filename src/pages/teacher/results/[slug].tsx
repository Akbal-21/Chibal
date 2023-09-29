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
  console.log(results);

  results.forEach((row) => {
    const userId = row.Alumnos.Usuarios.Usuarios_id; // Supongo que hay un campo 'Id' en Usuarios
    if (!resultadosAgrupados[userId]) {
      resultadosAgrupados[userId] = {
        usuario: `${row.Alumnos.Usuarios.Apellidos} ${row.Alumnos.Usuarios.Nombres}`,
        aciertos: [],
        fallos: [],
      };
    }
    console.log(resultadosAgrupados);

    // Divide los caracteres en aciertos y fallos
    row.Incisos.Respuestas.forEach((result) => {
      if (result.AlumnoID === row.Alumnos.Usuarios.Usuarios_id) {
        if (result.Respuesta === row.Incisos.LoSolicitado) {
          resultadosAgrupados[userId].aciertos.push(
            result.Respuesta ? result.Respuesta : "",
          );
        } else {
          resultadosAgrupados[userId].fallos.push(
            result.Respuesta ? result.Respuesta : "",
          );
        }
      }
    });
  });

  return (
    // Luego, renderiza la tabla con los datos agrupados
    <TeacherLayouth titel="Resultados de los Ejercicios">
      <div className="pt-11">
        <h2 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl text-center">
          Resultados del Ejercicio
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
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
            <tbody>
              {Object.keys(resultadosAgrupados).map((userId) => {
                const usuario = resultadosAgrupados[userId];
                const promedioPuntaje = (
                  (usuario.aciertos.length /
                    (usuario.aciertos.length + usuario.fallos.length)) *
                  100
                ).toFixed(2);

                return (
                  <tr
                    key={userId}
                    className="bg-white border-b  hover:bg-gray-200 "
                  >
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
