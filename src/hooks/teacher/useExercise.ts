import { IExerciseStudentDB, IExerciseTeacherDB } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

interface dataExercisesStudent {
  dataExercise: IExerciseStudentDB[];
}

export const useExerciseStudent = (
  url: string,
  config: SWRConfiguration = {},
) => {
  const { data, error } = useSWR<dataExercisesStudent>(`/api/${url}`, config);
  console.log({ data });

  const dataEx = data?.dataExercise;
  console.log(dataEx);

  return {
    exercise: dataEx || [],
    isLoading: !error && !data,
    isError: error,
  };
};

interface dataExercisesTeacher {
  dataExercise: IExerciseTeacherDB[];
}

export const useExerciseTeacher = (
  url: string,
  config: SWRConfiguration = {},
) => {
  const { data, error } = useSWR<dataExercisesTeacher>(`/api/${url}`, config);
  console.log({ data });

  const dataEx = data?.dataExercise;
  console.log(dataEx);

  return {
    exercise: dataEx || [],
    isLoading: !error && !data,
    isError: error,
  };
};
