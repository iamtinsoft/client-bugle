import useData from "../../../hooks/useData";

const useMessages = (id: number) =>
  useData<any>(
    `/messages/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useMessages;
