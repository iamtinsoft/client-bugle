import { Box } from "@chakra-ui/react";
import { LikesModal } from "./modals/LikesModal";
import usePostsViews from "../hooks/usePostsViews";

const LikesView = ({ id }: any) => {
  let { data } = usePostsViews(id);
  console.log(data);
  return (
    <Box>
      <LikesModal data={data} />
    </Box>
  );
};

export default LikesView;
