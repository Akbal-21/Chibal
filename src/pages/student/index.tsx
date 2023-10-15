import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { useExerciseStudent } from "@/hooks";
import { useRouter } from "next/router";
import { useContext } from "react";

const StudentPage = () => {
  // const { user } = useLoginUser();
  const { user } = useContext(AuthContext);
  const fechaActual = new Date();

  console.log({ user });

  const route = useRouter();
  const { exercise, isError, isLoading } = useExerciseStudent(
    `student/${user?.Usuarios_id}`,
  );

  console.log({ fechaActual, exercise });
  const handleDoExercise = (id: number) => {
    console.log(id);
    route.replace(`student/exercise/${id}`);
    return;
  };

  return (
    <SigInLayout titel="Ejercicios">
      <div className="grid grid-cols-1 items-center w-full">
        <div className="p-1 mt-20 relative flex justify-center items-center">
          {isLoading ? (
            <FullScreenLoading />
          ) : (
            <div className="grid grid-cols-1">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nombre del ejercicio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fecha Limite de entrega
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exercise.map((exercise, index) => (
                      <tr
                        className="bg-white border-b  hover:bg-gray-50"
                        key={exercise.Ejercicios.Ejercicios_id}
                      >
                        <td className="px-6 py-4 ">{index + 1}</td>
                        <td className="px-6 py-4 ">
                          {exercise.Ejercicios.NombreEjercicio}
                        </td>
                        <td className="px-6 py-4 ">
                          {
                            String(exercise.Ejercicios.FechaLimite).split(
                              "T",
                            )[0]
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                          <button
                            className="btn btn-secondary mx-1"
                            onClick={() =>
                              handleDoExercise(
                                exercise.Ejercicios.Ejercicios_id,
                              )
                            }
                            disabled={
                              exercise.Estado === 0 ||
                              exercise.Ejercicios.FechaLimite.getDate() >
                                fechaActual.getDate()
                            }
                          >
                            Resolver
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </SigInLayout>
  );
};

export default StudentPage;
