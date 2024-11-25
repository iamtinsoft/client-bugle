import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { EditUserModal } from "./EditUserModal";
import Notiflix, { Confirm } from "notiflix";
import { UpdateUserStatusApi } from "../services/userServices";

const ActionMenu = ({ user }: any) => {
  const handleClick = (status: number) => {
    let text = status == 1 ? "Deactivate" : "Activate";
    Confirm.show(
      "Notiflix Confirm",
      `Are you sure you want to ${text} this account?`,
      "Yes",
      "No",
      async () => {
        let data = { userId: user.userId, status };
        let { response, error } = await UpdateUserStatusApi(data);
        if (!error) {
          Notiflix.Report.success(
            "Success",
            response ?? "Success",
            "OK",
            () => {
              window.location.reload();
            }
          );
        } else {
          Notiflix.Report.failure("Error", error ?? "Error", "OK", () => {
            window.location.reload();
          });
        }
      },
      () => {},
      {}
    );
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Action
      </MenuButton>
      <MenuList>
        <MenuItem>
          <EditUserModal data={user} />
        </MenuItem>
        {user.status == 0 && (
          <MenuItem onClick={() => handleClick(1)}>Deactivate</MenuItem>
        )}
        {user.status == 1 && (
          <MenuItem onClick={() => handleClick(0)}>Activate</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default ActionMenu;
