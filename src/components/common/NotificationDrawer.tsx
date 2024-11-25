import {
  useDisclosure,
  Text,
  //   Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  //   Input,
  //   DrawerFooter,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { BellIcon } from "../icons";

export function NotificationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <Box cursor={"pointer"} ref={btnRef} onClick={onOpen}>
        <BellIcon boxSize={6} />
      </Box>
      {/* <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>

          <DrawerBody>
            <Text>No new notifications</Text>
            {/* <Input placeholder="Type here..." /> */}
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
