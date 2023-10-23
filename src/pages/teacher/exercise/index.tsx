import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { useExerciseTeacher } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const ExcercisePage = () => {
  const route = useRouter();
  const handleNew = () => {
    return route.replace("/teacher/exercise/new");
  };

  const { user } = useContext(AuthContext);

  const { exercise, isLoading } = useExerciseTeacher(
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
    <SigInLayout titel="Ejercicios">
      <div className="p-1 mt-20 relative flex justify-center items-center">
        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <div className="flex flex-wrap items-center justify-center flex-col">
            <div className="w-full pb-8 text-right">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-48 " onClick={handleNew}>
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                <b>Crear nuevo Ejercicio</b>
              </button>
            </div>
            <div className="relative overflow-x-auto shadow-md rounded-lg w-full">
              <table className="w-full flex-row flex-no-wrap text-sm text-left text-gray-500">
                <thead className=" text-gray-700 uppercase  ">
                  <tr className="flex-col flex-no wrap bg-gray-200">
                    <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Nombre del ejercicio
                    </th>
                    <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Fecha a Publicar
                    </th>
                    <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                      Fecha Limite de entrega
                    </th>
                    <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider max-sm:pb-24 ">
                      Acciones
                    </th>
                  </tr>
                </thead>
                  {exercise.map((exercise, index) => (
                <tbody className="max-sm:flex-1 ">
                    <React.Fragment key={exercise.Ejercicios_id}>
                      <tr className="flex-col flex-no wrap items-center bg-white border-b  hover:bg-gray-50">
                        <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        <td className="px-6 py-4 ">{index+1}</td>
                      </tr>
                      <tr className="flex-col flex-no wrap items-center bg-white border-b  hover:bg-gray-50">
                        <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                          Nombre
                        </th>
                        <td className="px-6 py-4 ">{exercise.NombreEjercicio}</td>
                      </tr>
                      <tr className="flex-col flex-no wrap items-center bg-white border-b  hover:bg-gray-50">
                        <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                          Fecha de la Publicación
                        </th>
                        <td className="px-6 py-4 ">{exercise.Estado_id === 1
                          ? "El ejercicio es un Borrador"
                          : String(exercise.FechaPublicacion).split("T")[0]}</td>
                      </tr>
                      <tr className="flex-col flex-no wrap items-center bg-white border-b  hover:bg-gray-50">
                        <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                          Fecha Limite de Entrega
                        </th>
                        <td className="px-6 py-4 ">{String(exercise.FechaLimite).split("T")[0]}</td>
                      </tr>
                      <tr className="flex-col flex-no wrap items-center bg-white border-b  hover:bg-gray-50">
                        <th className="px-6 py-4 text-left  font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                        <td className="px-6 py-4 max-sm:inline-grid">
                          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-secondary mx-1"
                          onClick={() => handleEdith(exercise.Ejercicios_id)}
                          disabled={exercise.Estado_id !== 1}
                        >
                          Editar
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error mx-1"
                          disabled={exercise.Estado_id !== 1}
                          onClick={() => handleDelete(exercise.Ejercicios_id)}
                        >
                          Eliminar
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-primary mx-1"
                          disabled={exercise.Estado_id === 1}
                          onClick={() =>
                            handleShowResults(exercise.Ejercicios_id)
                          }
                        >
                          Mostrar Resultados
                        </button>
                          
                        </td>
                      </tr>
                    </React.Fragment>
                </tbody>
                  ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </SigInLayout>
  );
};

export default ExcercisePage;
