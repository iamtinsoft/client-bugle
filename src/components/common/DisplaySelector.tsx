import { Button, Flex, Text } from "@chakra-ui/react";

import { ListIcon, MenuIcon } from "../icons";
import { greenColor } from "../../constants";

const DisplaySelector = ({ currentView, handleDisplayClick }: any) => {
  return (
    <Flex
      border={`1px solid ${greenColor}`}
      gap={0}
      py={1}
      px={1}
      borderRadius={5}
    >
      <Button
        size={"sm"}
        borderRadius={0}
        cursor={"pointer"}
        gap={2}
        bg={currentView == "grid" ? greenColor : "white"}
        justifyContent={"center"}
        alignItems={"center"}
        as={Flex}
        onClick={() => handleDisplayClick("grid")}
      >
        <Text fontWeight={600} fontSize={"sm"}>
          GridView
        </Text>{" "}
        <MenuIcon />
      </Button>
      <Button
        borderRadius={0}
        size={"sm"}
        bg={currentView == "list" ? greenColor : "white"}
        cursor={"pointer"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        as={Flex}
        onClick={() => handleDisplayClick("list")}
      >
        <Text fontWeight={600} fontSize={"sm"}>
          ListView
        </Text>{" "}
        <ListIcon boxSize={6} />
      </Button>
    </Flex>
  );
};

export default DisplaySelector;
