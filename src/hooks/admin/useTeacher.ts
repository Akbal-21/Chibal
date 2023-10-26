import { ITeacher } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

interface dataTeachers {
  teachers: ITeacher[];
}

export const useTeacher = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<dataTeachers>(`/api/${url}`, config);
  
    const dataAd = data?.teachers;
  
    return {
      teachers: dataAd || [],
      isLoading: !error && !data,
      isError: error,
    };
  };
  