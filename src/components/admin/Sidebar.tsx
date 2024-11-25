import {
  Box,
  useColorModeValue,
  //   Text,
  Image,
  Flex,
  BoxProps,
  CloseButton,
} from "@chakra-ui/react";
import {
  FiUsers,
  //FiSettings,
  FiCommand,
  FiLayout,
  FiFilm,
  FiAtSign,
  FiAirplay,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { NavItem } from "./NavItem";

import { BsFillCreditCardFill, BsNewspaper } from "react-icons/bs";

import { MdPeople } from "react-icons/md";
import { logo } from "../../assets";
interface SidebarProps extends BoxProps {
  onClose: () => void;
}
interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Role Management", icon: FiCommand, url: "/admin/role-management" },
  { name: "User Management", icon: FiUsers, url: "/admin/user-management" },

  {
    name: "Content Management",
    icon: FiLayout,
    url: "/admin/content-management",
  },
  { name: "Media Management", icon: FiFilm, url: "/admin/media-management" },
  { name: "News Management", icon: BsNewspaper, url: "/admin/news-management" },
  {
    name: "Story Management",
    icon: BsNewspaper,
    url: "/admin/story-management",
  },
  {
    name: "Why Management",
    icon: FiAirplay,
    url: "/admin/why-management",
  },
  {
    name: "Partners Management",
    icon: MdPeople,
    url: "#",
  },
  {
    name: "Give Management",
    icon: BsFillCreditCardFill,
    url: "#",
  },
  {
    name: "Social Management",
    icon: FiAtSign,
    url: "/admin/social-links-management",
  },
  // { name: "Settings", icon: FiSettings, url: "/admin/site-management" },
];
export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#021530", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="10"
        mt={3}
        justifyContent="space-between"
      >
        <Image height={"60px"} src={logo} />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem url={link.url} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
