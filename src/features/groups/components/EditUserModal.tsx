import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  // ModalFooter,
  // Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import EditUserGroup from "./EditUserGroup";
import { yellowColor } from "../../../constants";

export const EditUserModal = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize={"14px"}
        fontWeight={"medium"}
        size={"sm"}
        w={"full"}
        mt={2}
        bg={useColorModeValue(yellowColor, "gray.900")}
        color={"#000"}
      >
        Edit Group
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Group Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={3} overflowY={"scroll"} maxH={500}>
            <EditUserGroup close={onClose} data={data} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
