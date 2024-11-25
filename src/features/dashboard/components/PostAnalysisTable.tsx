import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { linkColor } from "../../../constants";
import PostAnalysisTableDetails from "./PostAnalysisTableDetails";
import { NavLink } from "react-router-dom";
import usePostsAnalysis from "../../../hooks/usePostsAnalysis";
import HasError from "../../../components/common/HasError";
import UsersSkeleton from "../../users/components/UsersSkeleton";

const PostAnalysisTable = () => {
  let { data, error, isLoading } = usePostsAnalysis();
  // let data = [
  //   {
  //     name: "Gen Tolu Wole",
  //     position: "General",
  //     avatar: "https://bit.ly/ryan-florence",
  //     postCount: 10,
  //     totalPostCount: 208,
  //   },
  //   {
  //     name: "Gen Segun Adebayo",
  //     position: "General",
  //     avatar: "https://bit.ly/sage-adebayo",
  //     postCount: 50,
  //     totalPostCount: 208,
  //   },
  //   {
  //     name: "Gen Kent Dodds",
  //     position: "General",
  //     avatar: "https://bit.ly/kent-c-dodds",
  //     postCount: 15,
  //     totalPostCount: 208,
  //   },
  //   {
  //     name: "Gen Prosper Otemuyiwa",
  //     position: "General",
  //     avatar: "https://bit.ly/prosper-baba",
  //     postCount: 13,
  //     totalPostCount: 208,
  //   },
  //   {
  //     name: "Gen Christian Nwamba",
  //     position: "General",
  //     avatar: "https://bit.ly/code-beast",
  //     postCount: 120,
  //     totalPostCount: 208,
  //   },
  // ];
  return (
    <Box h={"auto"} bg={"#fff"} borderRadius={8} p={7}>
      <Text fontSize={16} fontWeight={600}>
        Post Analysis
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={15} color={linkColor}>
          See which users post more
        </Text>
        <Button as={NavLink} to={"/admin/posts"} size={"sm"}>
          View All
        </Button>
      </Flex>
      {error && (
        <Box py={6}>
          <HasError />
        </Box>
      )}
      {isLoading && <UsersSkeleton />}
      {data &&
        data.length > 0 &&
        data.map((record, index) => (
          <PostAnalysisTableDetails key={index} data={record} />
        ))}
    </Box>
  );
};

export default PostAnalysisTable;
