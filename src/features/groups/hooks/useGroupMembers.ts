import useData from "../../../hooks/useData";

const useGroupMembers = (id: any) =>
  useData<any>(
    `/groups/members/${id}`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useGroupMembers;
