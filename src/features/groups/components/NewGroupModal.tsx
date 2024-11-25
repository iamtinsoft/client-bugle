import { AddIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import NewGroup from "./NewGroup";

export const NewGroupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg={"yellow.100"}
        fontWeight={600}
        fontSize={"sm"}
        color={"yellow.600"}
        onClick={onOpen}
      >
        Create Group <AddIcon boxSize={3} mx={2} />
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={0} overflowY={"scroll"} maxH={500}>
            <NewGroup close={onClose} />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
