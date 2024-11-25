import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import ExportPdf from "../../../components/common/ExportPdf";
import ExportExcel from "../../../components/common/ExportExcel";

const ExportMenu = ({ columns, data }: any) => {
  return (
    <Menu>
      <MenuButton
        fontWeight={600}
        fontSize={"sm"}
        as={Button}
        bg={"green.100"}
        color={"green.700"}
        rightIcon={<ChevronDownIcon />}
      >
        Export
      </MenuButton>
      <MenuList>
        <MenuItem p={3}>
          <ExportPdf columns={columns} json={data} />
        </MenuItem>
        <MenuItem p={3}>
          <ExportExcel data={data} />
        </MenuItem>
        {/* <MenuItem p={3}>
          <Flex gap={2}>
            <Image w={"25px"} objectFit={"cover"} src={csv} />
            <Text fontWeight={600} fontSize={"sm"}>
              CSV Format
            </Text>
          </Flex>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default ExportMenu;
