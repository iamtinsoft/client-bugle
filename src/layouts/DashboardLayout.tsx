import {
  useColorModeValue,
  Box,
  useDisclosure,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import { MobileNav } from "../components/admin/MobileNav";
import { Sidebar } from "../components/admin/Sidebar";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const DashboardLayout = ({ children }: Props) => {
  console.log("hhh");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
