import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  //ModalHeader,
  ModalCloseButton,
  ModalBody,
  // ModalFooter,
  Text,
  Button,
  useColorModeValue,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

//import EditUserGroup from "./EditUserGroup";
import { greenColor } from "../../../constants";
import GroupMembers from "./GroupMembers";
import AddGroupMembers from "./AddGroupMembers";

export const GroupMembersModal = ({ data }: any) => {
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
        bg={useColorModeValue(greenColor, "gray.900")}
        color={"#000"}
      >
        Group Members
      </Button>

      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Group Information</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody py={0} overflowY={"scroll"} maxH={600}>
            <Tabs position="relative" variant="unstyled">
              <TabList>
                <Tab>
                  <Text p={2} fontWeight={"bold"}>
                    Group Members
                  </Text>
                </Tab>
                <Tab>
                  <Text p={2} fontWeight={"bold"}>
                    Add Members
                  </Text>
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <p>
                    <GroupMembers id={data.id} />
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <AddGroupMembers id={data.id} />
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
