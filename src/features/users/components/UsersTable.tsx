import {
  TableContainer,
  Table,
  // TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  //   Tfoot,
  Avatar,
  Box,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";
import { User } from "../../../types/user-type";
import { splitDate } from "../../../utils/date_spliter";
import ActionMenu from "./ActionMenu";
import { ServerUrl } from "../../../constants";

const UsersTable = ({ data, properties }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {properties.map((property: any, index: number) => (
              <Th key={index}>{property}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user: User, index: number) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>
                <Flex gap={3}>
                  <Avatar src={ServerUrl + user.avatarUrl} />
                  <Box py={1}>
                    <Text fontSize={13} fontWeight={600}>
                      {user.firstName + " " + user.lastName}
                    </Text>
                    <Text color={"yellow.500"} fontSize={12}>
                      {user.userRank}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td fontWeight={600} fontSize={"xs"}>
                {user.serviceNumber}
              </Td>
              {/* <Td>{splitDate(user.lastLogin)}</Td> */}
              <Td>{user.postsCount}</Td>
              <Td>
                {user.status == 0 && <Badge colorScheme="green">Active</Badge>}
                {user.status == 1 && <Badge colorScheme="red">In Active</Badge>}
              </Td>
              <Td fontWeight={600} fontSize={"xs"}>
                {splitDate(user.created)}
              </Td>

              <Td>
                <ActionMenu user={user} />
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
