import useData from "../../../hooks/useData";
const usePostsComments = (id: number) =>
  useData<any>(
    `/posts_comments/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePostsComments;
