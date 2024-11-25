import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { darkColor, linkColor, yellowColor } from "../../../constants";
import useUserAnalysis from "../hooks/useUserAnalysis";

const DeActivatedAnalysis = () => {
  let { data: InActiveUsers } = useUserAnalysis(1);
  return (
    <Box textAlign={"left"} h={"full"} p={7} borderRadius={10} bg={yellowColor}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading fontWeight={"semibold"} color={darkColor}>
          {InActiveUsers.length}
        </Heading>
        <Button size={"xs"} color={"blue.300"}>
          2.6%
        </Button>
      </Flex>
      <Text color={linkColor}>Deactivated Users</Text>
    </Box>
  );
};

export default DeActivatedAnalysis;
