import { SigInLayout } from "@/components";
import { InternationalContext } from "@/context";
import { getExerciseAnswers, getNumLines } from "@/db/teacher/answers";
import { getExerciseInfo } from "@/db/teacher/cabecera";
import { IAnswer, IPDFCabecera } from "@/interface";
import { en, es } from "@/messages";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

interface Props {
  slug: string;
  results: IAnswer[];
  cabecera: IPDFCabecera[];
  numLines: number;
}

interface UsuarioResultados {
  usuario: string;
  aciertos: string[];
  fallos: string[];
  suma: number;
}

const ExerciseAnswersPage: NextPage<Props> = ({
  slug,
  results,
  cabecera,
  numLines,
}) => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const router = useRouter();
  const resultadosAgrupados: Record<string, UsuarioResultados> = {};
  const NombreEjercicio = cabecera[0]?.NombreEjercicio
    ? cabecera[0].NombreEjercicio
    : "";
  results.forEach((row) => {
    const userId = row.Alumnos.Usuarios.Usuarios_id;
    if (!resultadosAgrupados[userId]) {
      resultadosAgrupados[userId] = {
        usuario: `${row.Alumnos.Usuarios.Apellidos} ${row.Alumnos.Usuarios.Nombres}`,
        aciertos: [],
        fallos: [],
        suma: 0,
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
        resultadosAgrupados[userId].suma += result.Puntaje ?? 0;
      }
    });
  });

  const exportToPDF = () => {
    if (Object.keys(resultadosAgrupados).length === 0) {
      // No hay filas en la tabla, no se puede exportar a PDF
      alert(ms.teacher.exercise.pdf.alert);
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
      const cab = cabecera[0];
      // Agregar el nombre del ejercicio
      doc.setFontSize(16);
      doc.text(
        `${ms.teacher.exercise.pdf.exercie}: ${cab.NombreEjercicio}` || "",
        marginLeft,
        marginTop,
      );

      // Agregar el nombre del grupo, horario del turno y nivel del grado
      const infoGrupo = [];

      if (cab.Grupos) {
        if (cab.Grupos.NombreGrupo) {
          infoGrupo.push(
            `${ms.teacher.exercise.pdf.group}: ${cab.Grupos.NombreGrupo}`,
          );
        }
        if (cab.Grupos.Turno?.Horario) {
          infoGrupo.push(
            `${ms.teacher.exercise.pdf.shift}: ${cab.Grupos.Turno.Horario}`,
          );
        }
        if (cab.Grupos.Grado?.Nivel) {
          infoGrupo.push(
            `${ms.teacher.exercise.pdf.level}: ${cab.Grupos.Grado.Nivel}`,
          );
        }
      }
      doc.setFontSize(12);
      doc.text(infoGrupo.join(" | "), marginLeft, marginTop + 10);
    }

    autoTable(doc, {
      head: [
        [
          ms.teacher.exercise.pdf.studentName,
          ms.teacher.exercise.pdf.correct,
          ms.teacher.exercise.pdf.incorrect,
          ms.teacher.exercise.pdf.prom,
        ],
      ],
      body: Object.keys(resultadosAgrupados).map((userId) => {
        const usuario = resultadosAgrupados[userId];
        const promedioPuntaje = (
          usuario.suma / (numLines === undefined ? 1 : numLines)
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

  const handleResultsByStudent = (userId: string) => {
    router.replace(`/teacher/results/${slug}/${userId}`);
  };
  const handleBack = () => {
    router.push("/teacher/exercise");
  };

  return (
    <SigInLayout titel={ms.teacher.exercise.pdf.results}>
      <div className="pt-11">
        <h2 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl text-center">
          {ms.teacher.exercise.pdf.results}: {NombreEjercicio}
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table className="w-full text-sm text-left text-gray-500 ">
            <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
              <Tr>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.studentName}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.correct}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.incorrect}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.prom}
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {ms.teacher.exercise.pdf.showResults}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.keys(resultadosAgrupados).map((userId) => {
                const usuario = resultadosAgrupados[userId];
                const promedioPuntaje = (
                  usuario.suma / (numLines === undefined ? 1 : numLines)
                ).toFixed(2);

                return (
                  <Tr
                    key={userId}
                    className="bg-white border-b  hover:bg-gray-100 "
                  >
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {usuario.usuario}
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {usuario.aciertos.join(", ")}
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {usuario.fallos.join(", ")}
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {promedioPuntaje}%
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">
                      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                      <button
                        className=" btn btn-secondary"
                        onClick={() => handleResultsByStudent(userId)}
                      >
                        {ms.teacher.exercise.pdf.showResults}
                      </button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>

        <div className="mt-4 grid-cols-2 grid">
          <div className="p-4">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={exportToPDF}
              className="btn btn-primary font-bold m-1 btn-block"
              disabled={Object.keys(resultadosAgrupados).length === 0}
            >
              {ms.teacher.exercise.pdf.exportToPDF}
            </button>
          </div>

          <div className="p-4">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="btn btn-primary font-bold m-1 btn-block"
              onClick={() => handleBack()}
            >
              {ms.teacher.exercise.slug.return}
            </button>
          </div>
        </div>
      </div>
    </SigInLayout>
  );
};

export default ExerciseAnswersPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const x: IAnswer[] | undefined = await getExerciseAnswers(slug);
  const results: IAnswer[] = JSON.parse(JSON.stringify(x));
  const numLines: number | undefined = await getNumLines(slug);
  const c: IPDFCabecera[] | undefined = await getExerciseInfo(slug);
  const cabecera: IPDFCabecera[] = JSON.parse(JSON.stringify(c));
  return {
    props: {
      slug,
      results,
      cabecera,
      numLines,
    },
  };
};
