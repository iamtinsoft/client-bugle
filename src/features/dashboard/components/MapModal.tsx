import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  //ModalFooter,
  Box,
} from "@chakra-ui/react";
import SimpleMap from "../../../components/common/SimpleMap";
import { FaExpand } from "react-icons/fa";
export function MapModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size={"sm"} onClick={onOpen}>
        <FaExpand />
      </Button>

      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Live Location of Users</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h={"450px"}>
              <SimpleMap />
            </Box>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
