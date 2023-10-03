import { GetServerSideProps, NextPage } from "next";
import { getExerciseAnswers } from "@/db/teacher/answers";
import { getExerciseInfo } from "@/db/teacher/cabecera";
import { TeacherLayouth } from "@/components";
import { IAnswer, IPDFCabecera } from "@/interface";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Props {
  results: IAnswer[];
  cabecera: IPDFCabecera[];
}

interface UsuarioResultados {
  usuario: string;
  aciertos: string[];
  fallos: string[];
}

const ExerciseAnswersPage: NextPage<Props> = ({ results, cabecera }) => {
  const resultadosAgrupados: Record<string, UsuarioResultados> = {};

  results.forEach((row) => {
    const userId = row.Alumnos.Usuarios.Usuarios_id;
    if (!resultadosAgrupados[userId]) {
      resultadosAgrupados[userId] = {
        usuario: `${row.Alumnos.Usuarios.Apellidos} ${row.Alumnos.Usuarios.Nombres}`,
        aciertos: [],
        fallos: [],
      };
    }

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

  console.log(cabecera);

  const exportToPDF = () => {
    if (Object.keys(resultadosAgrupados).length === 0) {
      // No hay filas en la tabla, no se puede exportar a PDF
      alert("No hay datos para exportar a PDF.");
      return;
    }

    const doc = new jsPDF();
    const marginLeft = 10;
    const marginTop = 10;
    const tableWidth = 190;
    const tableHeight = 40;

    if (cabecera) {
      const marginLeft = 15;
      const marginTop = 15;
      const cab=cabecera[0]
      // Agregar el nombre del ejercicio
      doc.setFontSize(16);
      doc.text(`Ejercicio: ${cab.NombreEjercicio}` || '', marginLeft, marginTop);
  
      // Agregar el nombre del grupo, horario del turno y nivel del grado
      const infoGrupo = [];
      if (cab.Grupos) {
        if (cab.Grupos.NombreGrupo) {
          infoGrupo.push(`Grupo: ${cab.Grupos.NombreGrupo}`);
        }
        if (cab.Grupos.Turno?.Horario) {
          infoGrupo.push(`Turno: ${cab.Grupos.Turno.Horario}`);
        }
        if (cab.Grupos.Grado?.Nivel) {
          infoGrupo.push(`Nivel: ${cab.Grupos.Grado.Nivel}`);
        }
      }
      doc.setFontSize(12);
      doc.text(infoGrupo.join(' | '), marginLeft, marginTop + 10);
    }

    autoTable(doc, {
      head: [
        [
          "Nombre del Alumno",
          "Caracteres Acertados",
          "Caracteres Fallados",
          "Promedio del Puntaje",
        ],
      ],
      body: Object.keys(resultadosAgrupados).map((userId) => {
        const usuario = resultadosAgrupados[userId];
        const promedioPuntaje = (
          (usuario.aciertos.length /
            (usuario.aciertos.length + usuario.fallos.length)) *
          100
        ).toFixed(2);

        return [
          usuario.usuario,
          usuario.aciertos.join(", "),
          usuario.fallos.join(", "),
          `${promedioPuntaje}%`,
        ];
      }),
      margin: { top: marginTop },
      startY: marginTop + 25,
    });

    doc.save("tabla_resultados.pdf");
  };

  return (
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
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={exportToPDF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          disabled={Object.keys(resultadosAgrupados).length === 0}
        >
          Exportar tabla a PDF
        </button>
      </div>
    </TeacherLayouth>
  );
};

export default ExerciseAnswersPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const x: IAnswer[] | undefined = await getExerciseAnswers(slug);
  const results: IAnswer[] = JSON.parse(JSON.stringify(x));

  const c: IPDFCabecera[] | undefined = await getExerciseInfo(slug);
  const cabecera: IPDFCabecera[] = JSON.parse(JSON.stringify(c));
  return {
    props: {
      results,
      cabecera
    },
  };
};
