import useData from "./useData";
const useUsers = () =>
  useData<any>(
    `/users/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useUsers;
