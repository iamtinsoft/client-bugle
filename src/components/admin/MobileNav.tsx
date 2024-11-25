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

import { AuthLogout, GetCurrentUser } from "../../services/authService";
import { ServerUrl } from "../../constants";
import { logo } from "../../assets";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  let user = GetCurrentUser();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex
        gap={3}
        display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
      >
        <Image height={"30px"} src={logo} />
        <Text fontWeight={"semibold"} fontSize={"xl"}>
          Bugle
        </Text>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex gap={5} alignItems={"center"}>
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
                <Text fontSize="xs" color="gray.600">
                  {user?.userRank}
                </Text>
              </VStack>
              <MenuDivider />
              <MenuItem>Profile</MenuItem>

              <MenuDivider />
              <MenuItem onClick={AuthLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
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
                <Text fontSize="xs" color="gray.600">
                  {user?.userRank}
                </Text>
              </VStack>
              <MenuDivider />
              <MenuItem>Profile</MenuItem>

              <MenuDivider />
              <MenuItem onClick={AuthLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
