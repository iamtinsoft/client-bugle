"use client";

import { Stack, Text, Button } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";
import useCookies from "../../hooks/useCookies";
import parse from "html-react-parser";
import { useState } from "react";
export default function Privacy() {
  let [visible, setVisible] = useState("block");
  let { data, isLoading } = useCookies();
  console.log(data);
  console.log(isLoading);
  return (
    <Stack
      display={visible}
      bottom={0}
      left={10}
      position={"fixed"}
      bg={"yellow.400"}
      p="4"
      boxShadow="lg"
      m="4"
      borderRadius="sm"
    >
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
          {data && data.length > 0 && parse(data[0].content_data)}
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          {/* <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button> */}
          <Button onClick={() => setVisible("none")} bg="yellow">
            OK
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
