import useData from "../../../hooks/useData";
const useEvents = () =>
  useData<any>(
    `/events/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useEvents;
