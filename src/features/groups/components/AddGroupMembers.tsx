import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import useGroupMembers from "../hooks/useGroupMembers";
import EmptyRecord from "../../../components/common/EmptyRecord";
import useUsers from "../../../hooks/useUsers";
import { useEffect, useState } from "react";
import { CustomUserProfileCard } from "./CustomeUserProfileCard";

const AddGroupMembers = ({ id }: any) => {
  let { data: GroupMembers } = useGroupMembers(id);
  let { data } = useUsers();
  let [filteredUsers, setFilteredUsers] = useState<any>([]);
  function getDifference(array1: any, array2: any) {
    const diffFromA1toA2 = array1.filter(
      (obj1: any) =>
        !array2.some(
          (obj2: any) =>
            obj1.userId === obj2.userId && obj1.email === obj2.email
        )
    );

    const diffFromA2toA1 = array2.filter(
      (obj2: any) =>
        !array1.some(
          (obj1: any) =>
            obj2.userId === obj1.userId && obj2.email === obj1.email
        )
    );

    return [...diffFromA1toA2, ...diffFromA2toA1];
  }
  useEffect(() => {
    if (GroupMembers && data) {
      setFilteredUsers(getDifference(GroupMembers, data));
    }
  }, [GroupMembers, data]);
  return (
    <Box>
      <Text my={2}>Add Users to group</Text>
      {!filteredUsers && <EmptyRecord />}
      {filteredUsers && (
        <SimpleGrid gap={2} columns={{ base: 1, md: 3 }}>
          {filteredUsers &&
            filteredUsers.length > 0 &&
            filteredUsers.map((d: any, i: number) => (
              <CustomUserProfileCard key={i} data={d} id={id} />
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default AddGroupMembers;
