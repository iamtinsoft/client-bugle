import { Flex, Avatar, VStack, Heading, Box } from "@chakra-ui/react";

import { ServerUrl } from "../../../constants";
//import { splitDateTime } from "../../../utils/date_spliter";

const LeftResponseBox = ({ d }: any) => {
  return (
    <Box justifyContent={"flex-start"} mb={5}>
      <Flex gap={3} justifyContent={"flex-start"}>
        <Avatar
          name={d.firstName + " " + d.lastName}
          src={ServerUrl + d.avatarUrl}
        />
        <VStack spacing={1} justifyContent={"center"} alignItems={"flex-start"}>
          <Heading fontWeight={600} fontSize={15}>
            {d.firstName + " " + d.lastName}
          </Heading>
        </VStack>
      </Flex>
      <Flex justifyContent={"flex-start"}>
        <Box borderRadius={12} my={2} bg={"#F8F6FF"} p={3}>
          {d.message}
          {/* <Text textColor={"black"} fontSize={11}>
            {splitDateTime(d.created)}
          </Text> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default LeftResponseBox;
