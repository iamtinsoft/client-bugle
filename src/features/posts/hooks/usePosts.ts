import useData from "../../../hooks/useData";
const usePosts = (status: number) =>
  useData<any>(
    `/posts/status/${status}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePosts;
