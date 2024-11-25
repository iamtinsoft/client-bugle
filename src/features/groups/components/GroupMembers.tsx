import { Box, SimpleGrid } from "@chakra-ui/react";
import useGroupMembers from "../hooks/useGroupMembers";
import { UserProfileCard } from "./UserProfileCard";
import EmptyRecord from "../../../components/common/EmptyRecord";
//import useUsers from "../../../hooks/useUsers";

const GroupMembers = ({ id }: any) => {
  let { data } = useGroupMembers(id);
  //let { data:AllUsers } = useUsers();
  console.log(data);
  return (
    <Box>
      {!data && <EmptyRecord />}
      {data && (
        <SimpleGrid gap={2} columns={{ base: 1, md: 3 }}>
          {data &&
            data.length > 0 &&
            data.map((d, i) => <UserProfileCard key={i} data={d} />)}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default GroupMembers;
