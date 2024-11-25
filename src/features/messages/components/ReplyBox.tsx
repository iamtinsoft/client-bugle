import { Box, Flex, Button, FormControl, Input } from "@chakra-ui/react";
import { yellowColor } from "../../../constants";
import { useRef } from "react";
import Notiflix from "notiflix";
import { CreateMessageApi } from "../services/messageService";

const ReplyBox = ({ conversationId, user, socket }: any) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = async () => {
    if (ref.current?.value) {
      let messageObject = {
        message: ref.current?.value,
        userId: user.userId,
        conversationId,
      };
      //   {
      //     "userId": 7,
      //     "id": 2,
      //     "created": "2023-11-10T12:39:15.000Z",
      //     "message": "hdyhdhdhd",
      //     "userName": "@Tinsoft",
      //     "firstName": "Victor",
      //     "lastName": "Foluso",
      //     "email": "viktinho56@gmail.com",
      //     "avatarUrl": "uploads/2023-11-13T09:45:10.148Z-user-3.png"
      // },
      socket.emit("message", {
        userId: user.userId,
        conversationId,
        message: ref.current?.value,
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        avatarUrl: user.avatarUrl,
        email: user.email,
        created: new Date().toLocaleString(),
        id: `${socket.id}${Math.random()}`,
        socketID: conversationId,
      });
      await CreateMessageApi(messageObject);
      ref.current.value = "";
    } else {
      Notiflix.Notify.failure("Message cannot be empty");
    }
  };

  const handleTyping = () =>
    socket.emit("typing", {
      message: `${user.firstName} ${user.lastName} is typing`,
      socketID: conversationId,
    });

  return (
    <Box>
      <FormControl>
        <Input
          ref={ref}
          _focus={{ boxShadow: "none" }}
          border={0}
          type="text"
          onKeyDown={handleTyping}
          placeholder="Type a message"
        />
      </FormControl>
      <Flex justifyContent={"space-between"}>
        <Flex></Flex>
        <Button
          onClick={() => handleClick()}
          size={"sm"}
          bg={yellowColor}
          color={"#fff"}
        >
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default ReplyBox;
