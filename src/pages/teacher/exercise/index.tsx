import { chibalApi } from "@/api";
import { FullScreenLoading, SigInLayout } from "@/components";
import { AuthContext, InternationalContext } from "@/context";
import { useExerciseTeacher } from "@/hooks";
import { en, es } from "@/messages";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const ExcercisePage = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  const route = useRouter();
  const handleNew = () => {
    return route.replace(`/teacher/exercise/new-${user?.Usuarios_id}`);
  };

  const { user } = useContext(AuthContext);

  const { exercise, isLoading } = useExerciseTeacher(
    `teacher/exercise/${user?.Usuarios_id}`,
  );

  const handleEdith = (Ejercicios_id: number) => {
    console.log(Ejercicios_id);
    return route.replace(
      `/teacher/exercise/${Ejercicios_id}-${user?.Usuarios_id}`,
    );
  };

  const handleDelete = async (Ejercicios_id: number) => {
    const data = await chibalApi({
      url: "/teacher/exercise",
      method: "DELETE",
      data: { Ejercicios_id },
    });
    console.log(data);
    // route.reload();
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
          <div className="grid grid-cols-custom-2">
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
                      {ms.teacher.exercise.nameExercise}
                    </Th>
                    <Th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {ms.teacher.exercise.index.publicDate}
                    </Th>
                    <Th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {ms.teacher.exercise.limitDate}
                    </Th>
                    <Th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {ms.teacher.exercise.index.action.title}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {exercise.map((exercise, index) => (
                    <Tr
                      className="bg-white border-b  hover:bg-gray-50"
                      key={exercise.Ejercicios_id}
                    >
                      <Td className="px-6 py-4 ">{index + 1}</Td>
                      <Td className="px-6 py-4 ">{exercise.NombreEjercicio}</Td>
                      <Td className="px-6 py-4 ">
                        {exercise.Estado_id === 1
                          ? "El ejercicio es un Borrador"
                          : String(exercise.FechaPublicacion).split("T")[0]}
                      </Td>
                      <Td className="px-6 py-4 ">
                        {String(exercise.FechaLimite).split("T")[0]}
                      </Td>
                      <Td className="px-6 py-4 whitespace-nowrap ">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-secondary mx-1"
                          onClick={() => handleEdith(exercise.Ejercicios_id)}
                          disabled={exercise.Estado_id !== 1}
                        >
                          {ms.teacher.exercise.index.action.edit}
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-error mx-1"
                          disabled={exercise.Estado_id !== 1}
                          onClick={() => handleDelete(exercise.Ejercicios_id)}
                        >
                          {ms.teacher.exercise.index.action.dellet}
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                          className="btn btn-primary mx-1"
                          disabled={exercise.Estado_id === 1}
                          onClick={() =>
                            handleShowResults(exercise.Ejercicios_id)
                          }
                        >
                          {ms.teacher.exercise.index.action.showResults}
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
            <div className="px-4 w-full">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-primary w-48" onClick={handleNew}>
                <b className="text-xl">
                  <AiOutlineUsergroupAdd />
                </b>
                <b>{ms.teacher.exercise.index.newExercise}</b>
              </button>
            </div>
          </div>
        )}
      </div>
    </SigInLayout>
  );
};

export default ExcercisePage;
