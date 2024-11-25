import { Text, Box, Flex, Heading } from "@chakra-ui/react";

const EmptyMessageBox = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={"100%"} w={"100%"}>
      <Box>
        <Heading>Select a message</Heading>
        <Text>Choose from your existing conversations.</Text>
      </Box>
    </Flex>
  );
};

export default EmptyMessageBox;
