import { Box, Text } from "@chakra-ui/react";

const HasError = ({ error }: any) => {
  return (
    <Box bg={"red.200"} p={10}>
      {error ? (
        <Text color={"red.800"} fontSize={"20"} fontWeight={"semibold"}>
          {error}
        </Text>
      ) : (
        <Text color={"red.800"} fontSize={"20"} fontWeight={"semibold"}>
          An Error has Occured
        </Text>
      )}
    </Box>
  );
};

export default HasError;
