import useData from "./useData";
const useGroups = () =>
  useData<any>(
    `/groups/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useGroups;
