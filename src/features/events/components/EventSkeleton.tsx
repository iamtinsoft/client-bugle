import {
  Card,
  Skeleton,
  SkeletonText,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const EventSkeleton = () => {
  return (
    <Box>
      <SimpleGrid gap={{ base: 0, md: 50 }} columns={{ base: 1, md: 3 }}>
        <SkeletonText noOfLines={1} />
        <SkeletonText noOfLines={1} />
        <SkeletonText noOfLines={1} />
      </SimpleGrid>

      <Card mt={3}>
        <Skeleton height="400px" />
      </Card>
    </Box>
  );
};

export default EventSkeleton;
