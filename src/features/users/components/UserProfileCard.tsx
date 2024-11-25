"use client";

import {
  Heading,
  Avatar,
  Box,
  //Center,
  //Image,
  Flex,
  Text,
  Stack,
  //Button,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

import { EditUserModal } from "./EditUserModal";
import { ServerUrl } from "../../../constants";
import { DeleteUserModal } from "./DeleteModal";

export const UserProfileCard = ({ data }: any) => {
  return (
    <Box
      //maxW={"270px"}
      mt={12}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      //   boxShadow={"2xl"}
      rounded={"md"}
    >
      <Flex justify={"center"} mt={-10}>
        <Avatar
          border={"7px solid #EDF2F7"}
          size={"lg"}
          src={ServerUrl + data.avatarUrl}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"sm"} fontWeight={600}>
            {data.firstName} {data.lastName}
          </Heading>
          <Text fontSize={"xs"} color={"yellow.500"}>
            {data.userRank}
          </Text>
          <Box mt={2}>
            {data.status == 0 && <Badge colorScheme="green">Active</Badge>}
            {data.status == 1 && <Badge colorScheme="red">In Active</Badge>}
          </Box>
          {/* <Text fontSize={"xs"} color={"gray.400"}>
            {data.email}
          </Text> */}
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={2}>
          <EditUserModal data={data} />
          <DeleteUserModal data={data} />
        </Stack>

        {/* <Button
          w={"full"}
          mt={3}
          bg={useColorModeValue("red.500", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Remove
        </Button> */}
      </Box>
    </Box>
  );
};
