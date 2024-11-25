import {
  useColorModeValue,
  Box,
  useDisclosure,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { AdminSidebar } from "../components/sidebar/AdminSidebar";
import { AdminNavbar } from "../components/navbar/AdminNavbar";
interface Props {
  children?: ReactNode;
}
const AdminDashboardLayout = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <AdminSidebar
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
          <AdminSidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <AdminNavbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default AdminDashboardLayout;
