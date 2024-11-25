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
} from "@chakra-ui/react";
import { FileIcon } from "../../../../components/icons";
import EmptyRecord from "../../../../components/common/EmptyRecord";
import MediaCarousel from "../carousel/MediaCarousel";

export function AttachmentModal({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"transparent"} onClick={onOpen}>
        <Flex gap={2} alignItems={"center"}>
          <Icon fontSize="18" as={FileIcon} />
          <Text fontSize={14}>{data.length} Attachment(s)</Text>
        </Flex>
      </Button>

      <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={13}>View Attachments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data.length > 0 && <MediaCarousel data={data} />}
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
