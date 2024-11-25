import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Icon,
  Text,
  Avatar,
  Box,
  Heading,
} from "@chakra-ui/react";
import { CommentIcon } from "../../../../components/icons";
import { ServerUrl, linkColor } from "../../../../constants";
import EmptyRecord from "../../../../components/common/EmptyRecord";

export function CommentsModal({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"transparent"} onClick={onOpen}>
        <Flex gap={2} alignItems={"center"}>
          <Icon fontSize="18" as={CommentIcon} />
          <Text fontSize={14}>{data.length} Comment(s)</Text>
        </Flex>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={13}>View Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={"scroll"}>
            {data.map((d: any, i: number) => (
              <Flex gap={5} key={i}>
                <Avatar
                  name={d.firstName + " " + d.lastName}
                  src={ServerUrl + d.avatarUrl}
                />
                <Box>
                  <Flex>
                    <Heading fontSize={16}>
                      {d.firstName + " " + d.lastName}
                    </Heading>
                  </Flex>
                  <Text color={linkColor} fontSize={13} my={2}>
                    {d.comments}
                  </Text>
                </Box>
              </Flex>
            ))}
            {data.length == 0 && <EmptyRecord />}
          </ModalBody>

          <ModalFooter>
            <Button size={"sm"} colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
