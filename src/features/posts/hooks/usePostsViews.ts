import useData from "../../../hooks/useData";
const usePostsViews = (id: number) =>
  useData<any>(
    `/posts_views/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePostsViews;
