import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ServerUrl } from "../../../constants";
import { splitDate } from "../../../utils/date_spliter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ConversationsSkeleton from "./ConversationsSkeleton";
import useConversations from "../hooks/useConversations";
import { GetCurrentUser } from "../../../services/authService";
import HasError from "../../../components/common/HasError";

const Conversations = ({
  handleConversationClick,
  searchQuery,
  conversationId,
}: any) => {
  let user = GetCurrentUser();
  let { data, error, isLoading } = useConversations(user?.userId ?? 0);
  let [conversations, setConversations] = useState(data);
  //let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      let filtered = data.filter((x: any) =>
        x.firstName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      //setIsLoading(false);
      setConversations(filtered);
    } else {
      //setIsLoading(false);
      setConversations(data);
    }
  }, [data, searchQuery]);
  return (
    <Box>
      {conversations &&
        conversations.length > 0 &&
        !isLoading &&
        conversations.map((d: any, i: number) => (
          <motion.div whileHover={{ scale: 0.9 }}>
            <Box
              bg={conversationId == d.id ? "#FFEEC1" : "transparent"}
              onClick={() => {
                handleConversationClick(d.id);
              }}
              _hover={{ bg: "gainsboro", cursor: "pointer" }}
              key={i}
              px={5}
              py={3}
            >
              <Flex justifyContent={"space-between"}>
                <Flex gap={3}>
                  <Avatar
                    name={d.firstName + " " + d.lastName}
                    src={ServerUrl + d.avatarUrl}
                  />
                  <VStack
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                  >
                    <Heading fontWeight={600} fontSize={15}>
                      {d.firstName + " " + d.lastName}
                    </Heading>
                    <Text noOfLines={1} fontSize={13}>
                      {d.lastMessage}
                    </Text>
                  </VStack>
                </Flex>
                <Text textColor={"grey"} fontSize={13}>
                  {splitDate(d.created)}
                </Text>
              </Flex>
            </Box>
          </motion.div>
        ))}
      {isLoading && (
        <Box>
          <ConversationsSkeleton />
          <ConversationsSkeleton />
          <ConversationsSkeleton />
        </Box>
      )}
      {error && (
        <Box py={6}>
          <HasError />
        </Box>
      )}
    </Box>
  );
};

export default Conversations;
