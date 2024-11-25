import { Box } from "@chakra-ui/react";
import { AttachmentModal } from "./modals/AttachmentModal";
import usePostsMedia from "../hooks/usePostMedia";

const AttachmentView = ({ id }: any) => {
  let { data } = usePostsMedia(id);
  console.log(data);
  return (
    <Box>
      <AttachmentModal data={data} />
    </Box>
  );
};

export default AttachmentView;
