import { SigInLayout } from "@/components";
import { getExerciseAnswers, getNumLines } from "@/db/teacher/answers";
import { getExerciseInfo } from "@/db/teacher/cabecera";
import { IAnswer, IPDFCabecera } from "@/interface";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
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

const ExerciseAnswersPage: NextPage<Props> = ({ slug, results, cabecera,numLines }) => {
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
        suma:0
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
        resultadosAgrupados[userId].suma+=(result.Puntaje?? 0);
      }
    });
  });

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
      const cab = cabecera[0];
      // Agregar el nombre del ejercicio
      doc.setFontSize(16);
      doc.text(
        `Ejercicio: ${cab.NombreEjercicio}` || "",
        marginLeft,
        marginTop,
      );

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
      doc.text(infoGrupo.join(" | "), marginLeft, marginTop + 10);
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
          (usuario.suma /
            (numLines===undefined? 1: numLines)) 
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
    console.log({ userId });
  };

  return (
    <SigInLayout titel="Resultados de los Ejercicios">
      <div className="pt-11">
        <h2 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl text-center">
          Resultados del Ejercicio: {NombreEjercicio}
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table className="w-full text-sm text-left text-gray-500 ">
            <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
              <Tr>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Alumno
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Caracteres Acertados
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Caracteres Fallados
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Promedio del Puntaje
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ver resultados
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.keys(resultadosAgrupados).map((userId) => {
                const usuario = resultadosAgrupados[userId];
                const promedioPuntaje = (
                  (usuario.suma /
                    (numLines===undefined? 1: numLines)) 
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
                        Ver resultados
                      </button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={exportToPDF}
          className="btn btn-primary font-bold mt-3"
          disabled={Object.keys(resultadosAgrupados).length === 0}
        >
          Exportar tabla a PDF
        </button>
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
