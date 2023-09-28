import { IExerciseDB } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

interface dataExercises {
  dataExercise: IExerciseDB[];
}

export const useExercise = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<dataExercises>(`/api/${url}`, config);

  const dataEx = data?.dataExercise;

  return {
    exercise: dataEx || [],
    isLoading: !error && !data,
    isError: error,
  };
};
