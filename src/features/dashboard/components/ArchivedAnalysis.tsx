import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { lightColor, redColor } from "../../../constants";
import usePostAnalysis from "../hooks/usePostAnalysis";

const ArchivedAnalysis = () => {
  let { data } = usePostAnalysis();
  return (
    <Box textAlign={"left"} h={"full"} p={7} borderRadius={10} bg={redColor}>
      {data.length > 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontWeight={"semibold"} color={lightColor}>
            {data[0].archivedPostCount}
          </Heading>
          <Button size={"xs"} color={"blue.300"}>
            {Math.round(
              (data[0].archivedPostCount / data[0].totalPostCount) * 100
            )}
            %
          </Button>
        </Flex>
      )}
      <Text color={lightColor}>Archived Posts</Text>
    </Box>
  );
};

export default ArchivedAnalysis;
