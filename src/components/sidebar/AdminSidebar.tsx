import {
  Box,
  useColorModeValue,
  Text,
  Image,
  Flex,
  BoxProps,
  CloseButton,
  Button,
} from "@chakra-ui/react";

import { NavItem } from "./../common/NavItem";
import { logo } from "../../assets";

import { accentColor, darkColor, greenColor } from "../../constants";
import {
  DashboardIcon,
  ProductsIcon,
  UsersIcon,
  MessageIcon,
  // NotificationIcon,
  GearIcon,
  CalenderIcon,
  StoresIcon,
} from "../icons";
import { AuthLogout } from "../../services/authService";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
interface LinkItemProps {
  name: string;
  icon: any;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: DashboardIcon, url: "/admin/dashboard" },
  { name: "User Management", icon: UsersIcon, url: "/admin/user-management" },
  {
    name: "Groups",
    icon: StoresIcon,
    url: "/admin/group-management",
  },
  { name: "Messages", icon: MessageIcon, url: "/admin/messages" },
  // {
  //   name: "Notifications",
  //   icon: NotificationIcon,
  //   url: "/admin/notifications",
  // },
  {
    name: "Calendar & Events",
    icon: CalenderIcon,
    url: "/admin/events-management",
  },
  {
    name: "Posts",
    icon: ProductsIcon,
    url: "/admin/posts",
  },
  {
    name: "Settings",
    icon: GearIcon,
    url: "/admin/settings",
  },
];

export const AdminSidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#fff", "gray.900")}
      borderRight="0px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="5"
        gap={3}
        mt={0}

        //justifyContent="space-between"
      >
        <Image w={"120px"} src={logo} />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box h={0} bg={accentColor}></Box>
      <Text
        textTransform={"uppercase"}
        mt={3}
        mx={5}
        fontSize={11}
        fontWeight={"bold"}
        color={darkColor}
        opacity={0.5}
      >
        Basic
      </Text>

      {LinkItems.map((link) => (
        <NavItem key={link.name} url={link.url} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Box
        borderRadius={10}
        position={"absolute"}
        mx={6}
        p={5}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={{ base: 10, md: 50, lg: 50 }}
        bg={"#FFEEC1"}
        width={190}
      >
        <Image w={"90px"} src={logo} />
        <Button
          onClick={AuthLogout}
          _hover={{ bg: "#fff" }}
          bg={greenColor}
          mt={2}
          // size={{ base: "md", lg: "xs" }}
          w={"full"}
          borderRadius={20}
        >
          {" "}
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};
