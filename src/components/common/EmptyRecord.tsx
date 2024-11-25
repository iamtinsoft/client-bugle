import { Box, Text } from "@chakra-ui/react";

const EmptyRecord = () => {
  return (
    <Box bg={"yellow.400"} p={10}>
      <Text color={"yellow.800"} fontSize={"20"} fontWeight={"semibold"}>
        No Record Found
      </Text>
    </Box>
  );
};

export default EmptyRecord;
