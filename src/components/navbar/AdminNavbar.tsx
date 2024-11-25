import {
  Flex,
  useColorModeValue,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  // MenuDivider,
  Box,
  Text,
  Image,
  FlexProps,
  MenuDivider,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { GetCurrentUser } from "../../services/authService";
import { logo } from "../../assets";
import { AuthLogout } from "../../services/authService";
import { ServerUrl } from "../../constants";
import { NotificationDrawer } from "../common/NotificationDrawer";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const AdminNavbar = ({ onOpen, ...rest }: MobileProps) => {
  let link = window.location.pathname;
  const linkUrl = link.replace(/^(.*\/)/, "$1");
  const splitted = linkUrl.split("/");
  let user = GetCurrentUser();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 8 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontWeight={"bold"} display={{ base: "none", md: "flex" }}>
        {splitted[2].toUpperCase()}
      </Text>

      <Flex
        gap={3}
        display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
      >
        <Image height={"30px"} src={logo} />
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex gap={5} alignItems={"center"}>
          <NotificationDrawer />
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={ServerUrl + user?.avatarUrl} />

                <Box display={{ base: "none", md: "none" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text m={2} fontSize="sm">
                  {user?.firstName} {user?.lastName}
                </Text>
                <Text ml={2} fontSize="xs" color="yellow.500">
                  {user?.userRank}
                </Text>
              </VStack>
              <MenuDivider />
              <MenuItem>Profile</MenuItem>

              <MenuDivider />
              <MenuItem onClick={() => AuthLogout()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
