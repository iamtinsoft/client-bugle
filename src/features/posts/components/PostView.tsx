import { Flex, Avatar, Heading, Button, Box, Text } from "@chakra-ui/react";

import { ServerUrl, linkColor } from "../../../constants";
import AttachmentView from "./AttachmentView";
import CommentsView from "./CommentsView";
import LikesView from "./LikesView";
import { Confirm, Report } from "notiflix";
import { UpdatePostStatusApi } from "../services/postsService";

const PostView = ({ post }: any) => {
  const handleStatusUpdate = (status: number) => {
    Confirm.show(
      "Notiflix Confirm",
      "Are you sure you to execute this action?",
      "Yes",
      "No",
      async () => {
        let data = {
          postId: post.postId,
          status,
        };
        let { response, error } = await UpdatePostStatusApi(data);
        if (!error) {
          Report.success("Success", response ?? "", "OK", () => {
            window.location.reload();
          });
        }
      },
      () => {},
      {}
    );
  };

  return (
    <Box borderBottomColor={"gainsboro"} borderBottomWidth={2} mb={3}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={5}>
          <Avatar
            name={post.firstName + " " + post.lastName}
            src={ServerUrl + post.avatarUrl}
          />
          <Box>
            <Flex>
              <Heading fontSize={16}>
                {post.firstName + " " + post.lastName}
              </Heading>
            </Flex>
            <Text
              color={linkColor}
              w={{ base: "90%", md: "500px" }}
              fontSize={13}
              my={2}
            >
              {post.postContent}
            </Text>
          </Box>
        </Flex>
        {post.status === 1 ? (
          <Button onClick={() => handleStatusUpdate(2)} size={"sm"}>
            Archive Post
          </Button>
        ) : (
          <Button onClick={() => handleStatusUpdate(1)} size={"sm"}>
            UnArchive Post
          </Button>
        )}
      </Flex>
      <Flex p={2} my={0} gap={10} alignItems={"center"}>
        <AttachmentView id={post.postId} />
        <CommentsView id={post.postId} />
        <LikesView id={post.postId} />
      </Flex>
    </Box>
  );
};

export default PostView;
