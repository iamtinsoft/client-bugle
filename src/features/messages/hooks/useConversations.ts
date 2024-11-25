import useData from "../../../hooks/useData";

const useConversations = (id: number) =>
  useData<any>(
    `/conversations/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useConversations;
