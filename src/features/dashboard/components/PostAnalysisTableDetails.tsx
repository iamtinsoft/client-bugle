import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { ServerUrl, linkColor } from "../../../constants";

const PostAnalysisTableDetails = ({ data }: any) => {
  let {
    firstName,
    lastName,
    userRank,
    avatarUrl,
    postsCount,
    totalPostsCount,
  } = data;
  let percentageCalculator = () => {
    let percentageValue = (postsCount / totalPostsCount) * 100;
    let roundedValue = Math.round(percentageValue);
    if (percentageValue > 50) {
      return (
        <Button size={"xs"} bg={"green.200"} color={"green.600"}>
          {roundedValue}%
        </Button>
      );
    } else {
      return (
        <Button size={"xs"} bg={"yellow.200"} color={"yellow.600"}>
          {roundedValue}%
        </Button>
      );
    }
  };
  return (
    <Box>
      <Flex my={3} justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={2} justifyContent={"flex-start"} alignItems={"center"}>
          <Avatar
            size={"sm"}
            name={firstName + " " + lastName}
            src={ServerUrl + avatarUrl}
          />
          <VStack
            spacing={1}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Heading fontWeight={600} fontSize={15}>
              {firstName + " " + lastName}
            </Heading>
            <Text color={linkColor} fontSize={13}>
              {userRank}
            </Text>
          </VStack>
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Text fontSize={13} fontWeight={500}>
            {postsCount} Posts
          </Text>
          {percentageCalculator()}
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
};

export default PostAnalysisTableDetails;
