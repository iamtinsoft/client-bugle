import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

const ExportMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg={"green.100"}
        color={"green.700"}
        rightIcon={<ChevronDownIcon />}
      >
        Export
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ExportMenu;
