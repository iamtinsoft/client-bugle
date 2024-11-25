import {
  Box,
  Skeleton,
  SkeletonText,
  Flex,
  SkeletonCircle,
} from "@chakra-ui/react";

const UsersSkeleton = () => {
  return (
    <Flex>
      <Box py="6" px={3} bg="white">
        <SkeletonCircle size="12" />
      </Box>
      <Box py="6" w={"100%"} bg="white">
        <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
      <Skeleton ml={6} my={6} h={"40px"} borderRadius={8}>
        <div>contents wrapped</div>
      </Skeleton>
    </Flex>
  );
};

export default UsersSkeleton;
