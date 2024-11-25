import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { linkColor } from "../../../constants";
import RecentActivitiesTableDetails from "./RecentActivitiesTableDetails";
import useEvents from "../../events/hooks/useEvents";
import { NavLink } from "react-router-dom";
import EmptyRecord from "../../../components/common/EmptyRecord";
import UsersSkeleton from "../../users/components/UsersSkeleton";

const RecentActivitiesTable = () => {
  let { data: Events, error, isLoading } = useEvents();
  return (
    <Box h={"auto"} bg={"#fff"} borderRadius={8} p={7}>
      <Text fontSize={16} fontWeight={600}>
        Recent Activities
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={15} color={linkColor}>
          Check general system activities
        </Text>
        <Button as={NavLink} to={"admin/events-management"} size={"sm"}>
          View All
        </Button>
      </Flex>
      {isLoading && <UsersSkeleton />}
      {Events &&
        Events.length > 0 &&
        Events.map((record, index) => (
          <RecentActivitiesTableDetails key={index} data={record} />
        ))}
      {!isLoading && Events.length == 0 && <EmptyRecord />}
      {!isLoading && error && (
        <Box p={5} bg={"red.200"} textColor={"red.700"}>
          An Error has Occurred
        </Box>
      )}
    </Box>
  );
};

export default RecentActivitiesTable;
