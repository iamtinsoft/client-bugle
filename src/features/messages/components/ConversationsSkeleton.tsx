import { Box, SkeletonText, Flex, SkeletonCircle } from "@chakra-ui/react";

const ConversationsSkeleton = () => {
  return (
    <Flex>
      <Box py="2" px={3} bg="white">
        <SkeletonCircle size="12" />
      </Box>
      <Box py="3" w={"100%"} bg="white" mx={2}>
        <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
    </Flex>
  );
};

export default ConversationsSkeleton;
