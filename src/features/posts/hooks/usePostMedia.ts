import useData from "../../../hooks/useData";
const usePostsMedia = (id: number) =>
  useData<any>(
    `/posts_media/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePostsMedia;
