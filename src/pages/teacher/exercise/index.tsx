import { FullScreenLoading, TeacherLayouth } from "@/components";
import { useExercise } from "@/hooks";
import { useLoginUser } from "@/store/auth";
import { useRouter } from "next/router";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const ExcercisePage = () => {
  const route = useRouter();
  const handleNew = () => {
    return route.replace("/teacher/exercise/new");
  };

  const { user } = useLoginUser();

  const { exercise, isError, isLoading } = useExercise(
    `teacher/exercise/${user?.Usuarios_id}`
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
      <div className="p-1 mt-20 relative flex justify-center items-center">
        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <div className="grid grid-cols-custom-2">
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
                    <tr className="bg-white border-b  hover:bg-gray-50">
                      <td className="px-6 py-4 ">{index + 1}</td>
                      <td className="px-6 py-4 ">{exercise.NombreEjercicio}</td>
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
                          onClick={() => handleEdith(exercise.Ejercicios_id)}
                          disabled={exercise.Estado_id === 1 ? false : true}
                        >
                          Editar
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error mx-1"
                          disabled={exercise.Estado_id === 1 ? false : true}
                          onClick={() => handleDelete(exercise.Ejercicios_id)}
                        >
                          Eliminar
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-primary mx-1"
                          disabled={exercise.Estado_id === 1 ? false : true}
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
            <div className="px-4 w-full">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-48" onClick={handleNew}>
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                <b>Crear nuevo Ejercicio</b>
              </button>
            </div>
          </div>
        )}
      </div>
    </TeacherLayouth>
  );
};

export default ExcercisePage;
