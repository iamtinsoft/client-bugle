import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { lightColor, linkColor, redColor } from "../../constants";
import PostAnalysisCard from "./components/PostAnalysisCard";
import UserAnalysisCard from "./components/UserAnaysisCard";
import ArchivedAnalysis from "./components/ArchivedAnalysis";
import DeActivatedAnalysis from "./components/DeActivatedAnalysis";
import { motion } from "framer-motion";
import PostAnalysisTable from "./components/PostAnalysisTable";
import RecentActivitiesTable from "./components/RecentActivitiesTable";
import { GetCurrentUser } from "../../services/authService";

import SimpleMap from "../../components/common/SimpleMap";
import { MapModal } from "./components/MapModal";
import { Confirm, Report } from "notiflix";
import { CreateEmergencyPostApi } from "../posts/services/postsService";

import useGeoLocation from "../../hooks/useGeoLocation";

const Dashboard = () => {
  const user = GetCurrentUser();
  let { latitude, longitude } = useGeoLocation();
  const handleEmergencyPost = async () => {
    Confirm.show(
      "Confirm",
      "Are you sure you want to perform this action?",
      "Yes",
      "No",
      async () => {
        let data = {
          userId: user?.userId,
          postContent: `Emergency Reported at Latitude ${latitude} Longitude ${longitude}`,
          postMedia: [],
        };
        console.log(data);
        let { response, error } = await CreateEmergencyPostApi(data);
        if (!error) {
          Report.success(
            "Success",
            response ?? "Post Created Successfully",
            "Ok"
          );
        } else {
          Report.failure("Error", error ?? "An Error has Occurred", "Ok");
        }
      },
      () => {},
      {}
    );
  };
  return (
    <Box p={3}>
      <Text fontWeight={"semibold"}>
        Hello, {user?.firstName} {user?.lastName}
      </Text>
      <Flex my={5} justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"semibold"}>Welcome Back</Heading>
        <Button
          onClick={() => handleEmergencyPost()}
          borderRadius={30}
          size={"lg"}
          bg={redColor}
          color={lightColor}
        >
          Emergency
        </Button>
      </Flex>

      <SimpleGrid my={5} gap={5} columns={{ base: 1, md: 2 }}>
        <Box>
          <SimpleGrid gap={5} columns={{ base: 1, md: 2 }}>
            <motion.button whileHover={{ scale: 1.1 }}>
              <PostAnalysisCard />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <UserAnalysisCard />
            </motion.button>
          </SimpleGrid>
          <SimpleGrid mt={5} gap={5} columns={{ base: 1, md: 2 }}>
            <motion.button whileHover={{ scale: 1.1 }}>
              <ArchivedAnalysis />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <DeActivatedAnalysis />
            </motion.button>
          </SimpleGrid>
        </Box>
        <Box borderRadius={8} h={410} p={7} bg={"#fff"}>
          <Text fontWeight={"semibold"} fontSize={18}>
            Officers Location
          </Text>
          <Flex my={2} justifyContent={"space-between"} alignItems={"center"}>
            <Text fontWeight={"medium"} fontSize={14} color={linkColor}>
              See All Users and their location
            </Text>
            <MapModal />
          </Flex>
          <Box w={"100%"} h={"100%"}>
            <SimpleMap />
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid my={7} gap={5} columns={{ base: 1, md: 2 }}>
        <PostAnalysisTable />
        <RecentActivitiesTable />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
