import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { useExercise } from "@/hooks";
import { useRouter } from "next/router";
import { useContext } from "react";

const StudentPage = () => {
  // const { user } = useLoginUser();
  const { user } = useContext(AuthContext);

  const route = useRouter();
  const { exercise, isError, isLoading } = useExercise(
    `student/${user?.Usuarios_id}`,
  );

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
                        Fecha a Publicar
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
                        key={exercise.Ejercicios_id}
                      >
                        <td className="px-6 py-4 ">{index + 1}</td>
                        <td className="px-6 py-4 ">
                          {exercise.NombreEjercicio}
                        </td>
                        <td className="px-6 py-4 ">
                          {exercise.Estado_id === 1
                            ? "El ejercicio es un Borrador"
                            : String(exercise.FechaPublicacion).split("T")[0]}
                        </td>
                        <td className="px-6 py-4 ">
                          {String(exercise.FechaLimite).split("T")[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                          <button
                            className="btn btn-secondary mx-1"
                            onClick={() =>
                              handleDoExercise(exercise.Ejercicios_id)
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
