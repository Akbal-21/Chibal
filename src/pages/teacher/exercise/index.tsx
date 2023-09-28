import { FullScreenLoading, TeacherLayouth } from "@/components";
import { useExercise } from "@/hooks";
import { useLoginUser } from "@/store/auth";
import { useRouter } from "next/router";
import { MdPostAdd } from "react-icons/md";
const ExcercisePage = () => {
  const route = useRouter();
  const handleNew = () => {
    return route.replace("/teacher/exercise/new");
  };

  const { user } = useLoginUser();

  const { exercise, isError, isLoading } = useExercise(
    `teacher/exercise/${user?.Usuarios_id}`,
  );

  const handleEdith = (Ejercicios_id: number) => {
    console.log(Ejercicios_id);
    return route.replace(`/teacher/exercise/${Ejercicios_id}`);
  };

  const handleDelete = (Ejercicios_id: number) => {
    console.log(Ejercicios_id);
  };

  return (
    <TeacherLayouth titel="Ejercicios">
      <div className="grid grid-cols-custom-2 items-center w-full">
        <div className="p-1 mt-20 relative flex justify-center items-center">
          {isLoading ? (
            <FullScreenLoading />
          ) : (
            <div className="flex flex-col mx-6">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Nombre del ejercicio
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Fecha a Publicar
                          </th>
                          <th scope="col" className="px-6 py-4 text-center">
                            Fecla Limite de entrega
                          </th>
                          <th scope="col" className="px-6 py-4 text-center">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exercise.map((exercise, index) => (
                          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {exercise.NombreEjercicio}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {exercise.Estado_id === 1
                                ? "El ejercicio es un Borrador"
                                : String(exercise.FechaPublicacion).split(
                                    "T",
                                  )[0]}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {String(exercise.FechaLimite).split("T")[0]}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button
                                className="btn btn-secondary mx-1"
                                onClick={() =>
                                  handleEdith(exercise.Ejercicios_id)
                                }
                                disabled={
                                  exercise.Estado_id === 1 ? false : true
                                }
                              >
                                Editar
                              </button>
                              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button
                                className="btn btn-error mx-1"
                                disabled={
                                  exercise.Estado_id === 1 ? false : true
                                }
                                onClick={() =>
                                  handleDelete(exercise.Ejercicios_id)
                                }
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-1 relative">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn btn-primary w-48" onClick={handleNew}>
            <h1 className="text-2xl">
              <MdPostAdd />
            </h1>
            <b>Crear nuevo Ejercicio</b>
          </button>
        </div>
      </div>
    </TeacherLayouth>
  );
};

export default ExcercisePage;
