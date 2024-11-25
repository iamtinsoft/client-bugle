import { FlexProps, Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  url: string;
}
export const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
  let link = window.location.pathname;
  const linkUrl = link.replace(/^(.*\/)/, "$1");
  return (
    <Box
      as="a"
      href={url}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      {linkUrl == url ? (
        <Flex
          bg="#B69B4A"
          color="white"
          align="center"
          p="4"
          fontSize={14}
          mx="1"
          borderRadius="0"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#B69B4A",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="14"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      ) : (
        <Flex
          color={"#B69B4A"}
          align="center"
          p="4"
          fontSize={14}
          mx="0"
          borderRadius="0"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#000",
            color: "#B69B4A",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="14"
              _groupHover={{
                color: "#B69B4A",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      )}
    </Box>
  );
};
