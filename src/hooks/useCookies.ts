import useData from "./useData";
const useCookies = () =>
  useData<any>(
    `/contents/type/1`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useCookies;
