import { IAdmin } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

interface dataAdmins {
  admins: IAdmin[];
}

export const useAdmin = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<dataAdmins>(`/api/${url}`, config);
  
    const dataAd = data?.admins;
  
    return {
      admins: dataAd || [],
      isLoading: !error && !data,
      isError: error,
    };
  };
  