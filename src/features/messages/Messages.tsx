import { Box, Grid, GridItem, Hide } from "@chakra-ui/react";
import Conversations from "./components/Conversations";
import ConversationSearchBox from "./components/ConversationSearchBox";
import { GetCurrentUser } from "../../services/authService";
import { useState } from "react";
import EmptyMessageBox from "./components/EmptyMessageBox";
import MessageBox from "./components/MessageBox";
import ReplyBox from "./components/ReplyBox";
import * as io from "socket.io-client";
import { SocketUrl } from "../../constants";
import { NewMessageModal } from "./components/NewMessageModal";
const socket = io.connect(SocketUrl);
const Messages = () => {
  let user = GetCurrentUser();
  let [conversationId, setConversationId] = useState(0);
  let [query, setQuery] = useState<any>(null);
  const handleConversationClick = (id: any) => {
    setConversationId(id);
  };
  const handleSearch = (e: any) => {
    setQuery(e);
  };
  return (
    <Box p={3}>
      {/* <Text fontWeight={"semibold"}>Messages</Text> */}
      <Grid
        my={3}
        columnGap={5}
        templateColumns="repeat(3, 1fr)"
        minH={"100vh"}
      >
        <Hide below={"md"}>
          <GridItem height={"100%"} colSpan={{ base: 0, md: 1, lg: 1 }}>
            <Box overflowY={"scroll"} height={"70%"} bg={"#fff"}>
              <Grid my={3} columnGap={2} templateColumns="repeat(4, 1fr)">
                <GridItem height={"100%"} colSpan={{ base: 0, md: 3, lg: 3 }}>
                  <ConversationSearchBox onSearch={handleSearch} />
                </GridItem>
                <GridItem height={"100%"} colSpan={{ base: 0, md: 1, lg: 1 }}>
                  <NewMessageModal />
                </GridItem>
              </Grid>

              <Conversations
                // data={conversations}
                searchQuery={query}
                handleConversationClick={handleConversationClick}
                conversationId={conversationId}
              />
            </Box>
          </GridItem>
        </Hide>

        <GridItem colSpan={{ base: 3, md: 2, lg: 2 }}>
          <Box height={"55%"}>
            {conversationId == 0 ? (
              <EmptyMessageBox />
            ) : (
              <MessageBox conversationId={conversationId} socket={socket} />
            )}
            <Box
              mt={0.5}
              borderTop={2}
              px={5}
              py={2}
              bg={"#fff"}
              height={"100px"}
            >
              <ReplyBox
                conversationId={conversationId}
                user={user}
                socket={socket}
              />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Messages;
