import useData from "./useData";
const useRoles = () =>
  useData<any>(
    `/roles/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useRoles;
