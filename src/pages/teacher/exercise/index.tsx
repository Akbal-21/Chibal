import { FullScreenLoading, TeacherLayouth } from "@/components";
import { useExercise } from "@/hooks";
import { useLoginUser } from "@/store/auth";
import { useRouter } from "next/router";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";
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

  const handleShowResults = (exerciseId: number) => {
    
    return route.replace(`/teacher/results/${exerciseId}`);
  };

  return (
    <TeacherLayouth titel="Ejercicios">
      <div className="grid grid-cols-custom-2 items-center w-full">
        <div className="p-1 mt-20 relative flex justify-center items-center">
          {isLoading ? (
            <FullScreenLoading />
          ) : (
            <div className="mx-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                    <tr>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre del ejercicio
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha a publicar
                      </th>
                      <th className="px-6 py-3 text-center-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha limite de entrega
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exercise.map((exerci, index) => {
                      return (
                        <tr
                          key={exerci.Ejercicios_id}
                          className="bg-white border-b  hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {exerci.NombreEjercicio}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {exerci.FechaLimite
                              ? "Es un borrador"
                              : String(exerci.FechaLimite).split("T")[0]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {String(exerci.FechaPublicacion).split("T")[0]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-secondary mr-2"
                              onClick={() => handleEdith(exerci.Ejercicios_id)}
                            >
                              <AiTwotoneEdit />
                              Editar
                            </button>
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-error mr-2"
                              onClick={() => handleDelete(exerci.Ejercicios_id)}
                            >
                              <AiTwotoneDelete />
                              Eliminar
                            </button>
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                handleShowResults(exerci.Ejercicios_id)
                              }
                            >
                              <BiSolidShow />
                              Mostrar Resultados
                            </button>
                          </td>
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
                              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button
                                className="btn btn-primary mx-1"
                                disabled={
                                  exercise.Estado_id === 1 ? false : true
                                }
                                onClick={() =>
                                  handleShowResults(exercise.Ejercicios_id)
                                }
                              >
                                Mostrar Resultados
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
