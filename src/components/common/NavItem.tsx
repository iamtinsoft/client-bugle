import { FlexProps, Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { accentColor, hoverColor, linkColor } from "../../constants";
import "./../../assets/icofont/icofont.min.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
      as={NavLink}
      to={url}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      {linkUrl == url ? (
        <Flex
          align="center"
          px={3}
          mx={5}
          my={2}
          py={3}
          fontSize={15}
          fontWeight={"semibold"}
          bgColor={hoverColor}
          //mx="0"
          borderRadius="8"
          role="group"
          cursor="pointer"
          borderLeft="4px"
          borderLeftColor={accentColor}
          color={accentColor}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="14" as={icon} />}
          {children}
        </Flex>
      ) : (
        <motion.div whileHover={{ scale: 0.9 }}>
          <Flex
            color={linkColor}
            align="center"
            px={6}
            py={{ base: 3, md: 3, lg: 3 }}
            fontSize={14}
            fontWeight={"semibold"}
            mx="0"
            borderRadius="0"
            role="group"
            cursor="pointer"
            _hover={{
              opacity: 0.5,
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="2"
                fontSize="20"
                _groupHover={{
                  opacity: 0.5,
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </motion.div>
      )}
    </Box>
  );
};
