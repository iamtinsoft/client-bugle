import { Box, Flex } from "@chakra-ui/react";
import CalenderComponent from "./components/CalenderComponent";

import { NewEventModal } from "./components/NewEventModal";
import useEvents from "./hooks/useEvents";
import HasError from "../../components/common/HasError";
import EventSkeleton from "./components/EventSkeleton";

const Events = () => {
  let { data, error, isLoading } = useEvents();
  return (
    <Box p={3} bg={"#fff"}>
      <Flex my={5} justifyContent={"flex-end"}>
        {/* <Heading fontSize={26}>Calendar & Events</Heading> */}
        <NewEventModal />
      </Flex>
      {error && (
        <Box py={6}>
          <HasError />
        </Box>
      )}
      {data && data.length > 0 && !isLoading && (
        <CalenderComponent data={data} />
      )}
      {isLoading && <EventSkeleton />}
    </Box>
  );
};

export default Events;
