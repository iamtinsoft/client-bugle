import { Box, Progress } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box>
      Loading
      <Progress size="md" isIndeterminate />
    </Box>
  );
};

export default Loading;
