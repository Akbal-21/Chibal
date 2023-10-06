import { ISchool } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

interface dataSchools {
  schools: ISchool[];
}

export const useSchool = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<dataSchools>(`/api/${url}`, config);
  
    const dataSc = data?.schools;
  
    return {
      schools: dataSc || [],
      isLoading: !error && !data,
      isError: error,
    };
  };
  