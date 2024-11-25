import useData from "../../../hooks/useData";

const useUserAnalysis = (status: number) =>
  useData<any>(
    `/users/status/${status}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useUserAnalysis;
