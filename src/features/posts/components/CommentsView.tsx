import usePostsComments from "../hooks/usePostComments";
import { CommentsModal } from "./modals/CommentsModal";
import { Box } from "@chakra-ui/react";

const CommentsView = ({ id }: any) => {
  let { data } = usePostsComments(id);
  console.log(data);
  return (
    <Box>
      <CommentsModal data={data} />
    </Box>
  );
};

export default CommentsView;
