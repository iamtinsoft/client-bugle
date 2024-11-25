import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { linkColor } from "../../../constants";

const RecentActivitiesTableDetails = ({ data }: any) => {
  let {
    eventName,
    eventStartDate,
    eventStartTime,
    eventEndDate,
    eventEndTime,
    eventLocation,
  } = data;

  return (
    <Box>
      <Flex my={3} justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={2} justifyContent={"flex-start"} alignItems={"center"}>
          <Avatar size={"sm"} name="A" src={""} />
          <VStack
            spacing={1}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Heading fontWeight={600} fontSize={15}>
              {eventName}
            </Heading>
            <Text color={linkColor} fontSize={13}>
              {eventLocation}
            </Text>
          </VStack>
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Button size={"xs"} bg={"blue.100"} color={"blue.600"}>
            {eventStartDate} {eventStartTime} - {eventEndDate} {eventEndTime}
          </Button>
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
};

export default RecentActivitiesTableDetails;
