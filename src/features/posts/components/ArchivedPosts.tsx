import { Box } from "@chakra-ui/react";

import usePosts from "../hooks/usePosts";
import PostView from "./PostView";
// import EmptyRecord from "../../../components/common/EmptyRecord";
import HasError from "../../../components/common/HasError";
import PostsSkeleton from "./PostsSkeleton";

const ArchivedPosts = () => {
  let { data, isLoading, error } = usePosts(2);

  let skeleton = [1, 2, 3, 4, 5];
  return (
    <Box>
      {isLoading &&
        !error &&
        skeleton.length > 0 &&
        skeleton.map((i: number) => <PostsSkeleton key={i} />)}
      {data &&
        data.length > 0 &&
        data.map((post: any, i: number) => <PostView key={i} post={post} />)}
      {error && !isLoading && <HasError error={error} />}
      {/* {!error && !isLoading && data && data.length == 0 && <EmptyRecord />} */}
    </Box>
  );
};

export default ArchivedPosts;
