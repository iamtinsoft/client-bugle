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
  Button,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

//import { EditUserModal } from "./EditUserModal";
import { ServerUrl } from "../../../constants";
//import { DeleteUserModal } from "./DeleteModal";
import { Confirm, Report } from "notiflix";
import { AddUserToGroupApi } from "../services/userServices";

export const CustomUserProfileCard = ({ data, id }: any) => {
  const handleClick = () => {
    Confirm.show(
      "Confirm",
      "Do you want to execute this action?",
      "Yes",
      "No",
      async () => {
        let obj = {
          userId: data.userId,
          postGroupId: id,
        };
        let { error, response } = await AddUserToGroupApi(obj);
        if (!error) {
          Report.success(
            "Success",
            response ?? "Added Successfully",
            "Okay",
            () => {
              window.location.reload();
            }
          );
        } else {
          Report.failure("Error", "An Error has Occurred", "Retry");
        }
      },
      () => {
        //alert("If you say so...");
      },
      {}
    );
  };
  return (
    <Box
      //maxW={"270px"}
      mt={12}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
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

        {/* <Stack direction={"row"} justify={"center"} spacing={2}>
          <EditUserModal data={data} />
          <DeleteUserModal data={data} />
        </Stack> */}

        <Button
          onClick={() => handleClick()}
          w={"full"}
          mt={3}
          size={"sm"}
          bg={useColorModeValue("green.500", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Add to Group
        </Button>
      </Box>
    </Box>
  );
};
