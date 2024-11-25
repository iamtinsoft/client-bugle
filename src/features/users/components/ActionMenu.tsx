import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { EditUserModal } from "./EditUserModal";
import { DeleteUserModal } from "./DeleteModal";

const ActionMenu = ({ user }: any) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Action
      </MenuButton>
      <MenuList>
        <MenuItem>
          <EditUserModal data={user} />
        </MenuItem>
        <MenuItem>
          <DeleteUserModal data={user} />
        </MenuItem>
        {/* {user.status == 0 && (
          <MenuItem onClick={() => handleClick(1)}>Deactivate</MenuItem>
        )}
        {user.status == 1 && (
          <MenuItem onClick={() => handleClick(0)}>Activate</MenuItem>
        )} */}
      </MenuList>
    </Menu>
  );
};

export default ActionMenu;
