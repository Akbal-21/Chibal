import useSWR, { SWRConfiguration } from "swr";

interface dataStudent {
  dataStudent: [
    {
      Grupos_id: number;
      NombreGrupo: string;
    },
  ];
}

export const useGroup = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<dataStudent>(`/api/${url}`, config);

  const dataStudent = data?.dataStudent;

  // console.log();

  return {
    escuela: dataStudent || [],
    isLoading: !error && !data,
    isError: error,
  };
};
