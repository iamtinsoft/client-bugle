import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  AvatarGroup,
  Badge,
  SkeletonText,
} from "@chakra-ui/react";
import { ServerUrl, darkColor, linkColor } from "../../../constants";
import useUsers from "../../../hooks/useUsers";
import { User } from "../../../types/user-type";
import useUserAnalysis from "../hooks/useUserAnalysis";

const UserAnalysisCard = () => {
  let { data } = useUsers();
  let { data: ActiveUsers, error, isLoading } = useUserAnalysis(0);
  return (
    <Box textAlign={"left"} h={"full"} p={7} borderRadius={10} bg={"#fff"}>
      <Stack direction="column" justifyContent={"flex-start"} spacing={10}>
        <Box>
          <Heading fontWeight={"semibold"} color={darkColor}>
            {data.length}
          </Heading>
          <Text color={linkColor}>Registered Users</Text>
        </Box>
        <Box mt={8}>
          <Heading fontSize={15} fontWeight={"semibold"} color={darkColor}>
            Active Users{" "}
            <Badge colorScheme="green" size={"md"}>
              {ActiveUsers.length}
            </Badge>
          </Heading>
          {!isLoading && !error && ActiveUsers && ActiveUsers.length > 0 && (
            <AvatarGroup mt={2} size="sm" max={9}>
              {ActiveUsers.map((record: User, index: number) => (
                <Avatar
                  key={index}
                  name={`${record.firstName} " " ${record.lastName}`}
                  src={ServerUrl + record.avatarUrl}
                />
              ))}
            </AvatarGroup>
          )}
          {isLoading && (
            <Box>
              <SkeletonText
                mt="2"
                noOfLines={1}
                spacing="4"
                skeletonHeight="2"
              />
              <Box mt={0} py="3" w={"100%"}>
                <SkeletonText
                  mt="2"
                  noOfLines={2}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default UserAnalysisCard;
