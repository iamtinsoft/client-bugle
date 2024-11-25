import useData from "../../../hooks/useData";

const usePostAnalysis = () =>
  useData<any>(
    `/posts/count/all`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePostAnalysis;
