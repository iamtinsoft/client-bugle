import { SkeletonCircle, SkeletonText, Flex } from "@chakra-ui/react";

const PostsSkeleton = () => {
  return (
    <Flex gap={5} my={3}>
      <SkeletonCircle w={50} h={50} />
      <SkeletonText h={"70px"} w={"80%"} />
    </Flex>
  );
};

export default PostsSkeleton;
