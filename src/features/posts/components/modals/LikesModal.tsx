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
  Avatar,
  AvatarGroup,
  Box,
  Wrap,
  WrapItem,
  Text,
  Center,
} from "@chakra-ui/react";
import EmptyRecord from "../../../../components/common/EmptyRecord";
import { ServerUrl } from "../../../../constants";

export function LikesModal({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box cursor={"pointer"} onClick={onOpen}>
        {data.length == 0 && <Avatar bg={"gainsboro"} size="sm" name={"O"} />}
        <Flex gap={2} alignItems={"center"}>
          <AvatarGroup size="sm" max={2}>
            {data &&
              data.length > 0 &&
              data.map((d: any, i: number) => (
                <Avatar
                  key={i}
                  name={d.firstName + " " + d.lastName}
                  src={ServerUrl + d.avatarUrl}
                />
              ))}
          </AvatarGroup>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={13}>View Post Engagements</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              <Wrap>
                {data.length > 0 &&
                  data.map((d: any, i: number) => (
                    <WrapItem key={i}>
                      <Box>
                        <Center>
                          <Avatar
                            src={ServerUrl + d.avatarUrl}
                            size="sm"
                            name={d.firstName + " " + d.lastName}
                          />
                        </Center>
                        <Text fontSize={12}>
                          {d.firstName + " " + d.lastName}
                        </Text>
                      </Box>
                    </WrapItem>
                  ))}
              </Wrap>
            }
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
