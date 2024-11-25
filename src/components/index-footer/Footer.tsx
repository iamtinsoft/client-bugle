"use client";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  // Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { colorLogoNoBackground } from "../../assets";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

// import useSocial from "../../hooks/useSocial";
// import { IconResolver } from "../../utils/icon_resolver";
import { logo } from "../../assets";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  //let { data } = useSocial();

  return (
    <Box
      fontSize={"14px"}
      //   bottom={0}
      //   position={"absolute"}
      bg={useColorModeValue("black", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} color={"#fff"}>
            <Box>
              <Image src={logo} w={150} />
            </Box>
            {/* <Text fontSize={"sm"}>Potato ltd © 2023 All rights reserved</Text> */}
          </Stack>
          <Stack align={"flex-start"} color={"#fff"}>
            <ListHeader>Company</ListHeader>
            {/* <Box as="a" href={"#"}>
              About Us
            </Box> */}
            <Box as="a" _hover={{ color: "yellow" }} href={"/our-story"}>
              Our Story
            </Box>
            <Box as="a" _hover={{ color: "yellow" }} href={"/consultants"}>
              Our Consultants
            </Box>
            {/* <Box as="a" _hover={{ color: "yellow" }} href={"#"}>
              Clients
            </Box> */}
            {/* <Box as="a" _hover={{ color: "yellow" }} href={"#"}>
              Join Potato
            </Box> */}
            <Box as="a" _hover={{ color: "yellow" }} href={"/why-potato"}>
              Why Potato
            </Box>
            <Box as="a" _hover={{ color: "yellow" }} href={"/vacancies"}>
              Our Vacancies
            </Box>
          </Stack>
          {/* <Stack align={"flex-start"} color={"#fff"}>
            <ListHeader>Quick Links</ListHeader>
          </Stack> */}

          <Stack align={"flex-start"} color={"#fff"}>
            <ListHeader>Support</ListHeader>
            {/* <Box as="a" href={"#"}>
              Help Center
            </Box> */}
            <Box as="a" _hover={{ color: "yellow" }} href={"/terms"}>
              Terms of Service
            </Box>
            {/* <Box as="a" href={"#"}>
              Legal
            </Box> */}
            <Box as="a" _hover={{ color: "yellow" }} href={"/privacy"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Company Number 14783891
            </Box>
          </Stack>
          <Stack align={"flex-start"} color={"#fff"}>
            <ListHeader>Follow Us</ListHeader>
            {/* {data &&
              data.length > 0 &&
              data.map((l, i) => (
                <Flex
                  key={i}
                  _hover={{ color: "yellow" }}
                  gap={2}
                  alignItems={"center"}
                  as="a"
                  href={l.url}
                >
                  <Icon as={IconResolver(l.icon)} />{" "}
                  <span style={{ textTransform: "capitalize" }}>{l.name}</span>
                </Flex>
              ))} */}
            {/* <Flex
              _hover={{ color: "yellow" }}
              gap={2}
              alignItems={"center"}
              as="a"
              href={"#"}
            >
              <Icon as={BsTwitter} /> Twitter
            </Flex>
            <Flex
              _hover={{ color: "yellow" }}
              gap={2}
              alignItems={"center"}
              as="a"
              target="_blank"
              href={
                "https://instagram.com/pot.atoconsultant?igshid=NzZhOTFlYzFmZQ "
              }
            >
              <Icon as={BsInstagram} /> Instagram
            </Flex>

            <Flex
              _hover={{ color: "yellow" }}
              gap={2}
              alignItems={"center"}
              as="a"
              target="_blank"
              href={"https://www.linkedin.com/in/potato-consultancy-571349293"}
            >
              <Icon as={BsLinkedin} /> LinkedIn
            </Flex> */}
          </Stack>
          <Stack align={"flex-start"} color={"#fff"}>
            <ListHeader>Our Contact</ListHeader>
            <Box as="a" href={"#"}>
              HQ - Coventry <br />3 The Quadrant <br /> Warwick Road <br />{" "}
              Coventry <br /> CV1 2DY
            </Box>
            <Box>
              <Flex alignItems={"center"} gap={3} mb={2}>
                {" "}
                <PhoneIcon boxSize={4} /> <Text>0742899272</Text>
              </Flex>
              <Flex
                as="a"
                href={"mailto:contact@potatoltd.co.uk"}
                alignItems={"center"}
                gap={3}
              >
                {" "}
                <EmailIcon boxSize={6} /> <Text>contact@potatoltd.co.uk</Text>
              </Flex>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
