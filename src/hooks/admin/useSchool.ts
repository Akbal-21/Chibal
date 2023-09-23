import useSWR, { SWRConfiguration } from "swr";

export const useSchool = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR(`/api/${url}`, config);

  return {
    escuela: data || "",
    isLoading: !error && !data,
    isError: error,
  };
};
