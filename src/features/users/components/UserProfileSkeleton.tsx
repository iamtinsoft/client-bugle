import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const UserProfileSkeleton = () => {
  return (
    <Card mt={3}>
      <Skeleton height="150px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default UserProfileSkeleton;
