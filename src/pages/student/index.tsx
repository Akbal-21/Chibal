import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext, InternationalContext } from "@/context";
import { useExerciseStudent } from "@/hooks";
import { en, es } from "@/messages";
import { useQuestionsStore } from "@/store/student/question";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const StudentPage = () => {
  // const { user } = useLoginUser();
  const { user } = useContext(AuthContext);
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const fechaLocal = new Date();
  // Obtiene el desplazamiento de zona horaria del cliente en minutos

  const route = useRouter();
  const { exercise, isError, isLoading } = useExerciseStudent(
    `student/${user?.Usuarios_id}`,
  );

  console.log({ exercise });
  const handleDoExercise = (id: number, tipo: number | null) => {
    console.log({ id, tipo });
    if (tipo === 1 || tipo === 2 || tipo === 3) {
      return route.replace(`student/exercise/${id}`);
    }
    if (tipo === 4) {
      console.log("Entra");
      route.replace(`student/spelling/${id}`);
    }
    return;
  };

  function fun(FechaLimite: Date): boolean | undefined {
    const z = new Date(String(FechaLimite).split("T")[0]).getTime();
    const y =
      fechaLocal.getTime() -
      fechaLocal.getTimezoneOffset() * 60 * 1000 -
      3600 * 1000 * 24;

    return z - y < 0;
  }

  function fun1(FechaLimite: Date): string {
    const debug = true;
    if (!debug) return "";
    const z = new Date(String(FechaLimite).split("T")[0]).getTime();

    const y =
      fechaLocal.getTime() -
      fechaLocal.getTimezoneOffset() * 60 * 1000 -
      3600 * 1000 * 24;
    let tiempoRestante = z - y;

    if (tiempoRestante < 0) {
      // La fecha ya pasó, muestra el tiempo transcurrido
      tiempoRestante *= -1;
      const dias = Math.floor(tiempoRestante / (24 * 60 * 60 * 1000));
      const horas = Math.floor(
        (tiempoRestante % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutos = Math.floor(
        (tiempoRestante % (60 * 60 * 1000)) / (60 * 1000),
      );

      return `Tiempo transcurrido: 
      ${dias ? `${dias} días` : ""} 
      ${horas ? `${horas} horas` : ""} 
      ${minutos ? `${minutos} minutos` : ""}`;
    } else {
      // La fecha aún no ha llegado, muestra el tiempo restante
      const dias = Math.floor(tiempoRestante / (24 * 60 * 60 * 1000));
      const horas = Math.floor(
        (tiempoRestante % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutos = Math.floor(
        (tiempoRestante % (60 * 60 * 1000)) / (60 * 1000),
      );

      return `Tiempo restante: 
      ${dias ? `${dias} días` : ""} 
      ${horas ? `${horas} horas` : ""} 
      ${minutos ? `${minutos} minutos` : ""}`;
    }
  }
  const reset = useQuestionsStore(state => state.reset)
  
  return (
    <SigInLayout titel={ms.student.navbar.exercise}>
      <div className="grid grid-cols-1 items-center w-full">
        <div className="p-1 mt-20 relative flex justify-center items-center">
          {isLoading ? (
            <FullScreenLoading />
          ) : (
            <div className="grid grid-cols-1">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <Table className="w-full text-sm text-left text-gray-500">
                  <Thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                    <Tr>
                      <Th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </Th>
                      <Th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {ms.student.index.nameExercise}
                      </Th>
                      <Th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {ms.student.index.limitDate}
                      </Th>
                      <Th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {ms.student.index.actions.title}
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {exercise.map((exercise, index) => (
                      <Tr
                        className="bg-white border-b  hover:bg-gray-50"
                        key={exercise.Ejercicios.Ejercicios_id}
                      >
                        <Td className="px-6 py-4 ">{index + 1}</Td>
                        <Td className="px-6 py-4 ">
                          {exercise.Ejercicios.NombreEjercicio}
                        </Td>
                        <Td className="px-6 py-4 ">
                          {
                            String(exercise.Ejercicios.FechaLimite).split(
                              "T",
                            )[0]
                          }
                        </Td>
                        <Td className="px-6 py-4 whitespace-nowrap ">
                          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                          <button
                            className="btn btn-secondary mx-1"
                            onClick={() =>{
                              reset();
                              handleDoExercise(
                                exercise.Ejercicios.Ejercicios_id,
                                exercise.Ejercicios.TipoEjercicio_id,
                              )}
                            }
                            disabled={
                              fun(exercise.Ejercicios.FechaLimite) ||
                              exercise.Estado === 1
                            }
                          >
                            {ms.student.index.actions.resolve}
                          </button>
                          <br />
                          {fun1(exercise.Ejercicios.FechaLimite)}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </SigInLayout>
  );
};

export default StudentPage;
