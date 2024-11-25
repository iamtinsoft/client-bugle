import useData from "./useData";
const usePostsAnalysis = () =>
  useData<any>(
    `/posts_analysis/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePostsAnalysis;
