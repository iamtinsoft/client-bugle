import { Grid, GridItem, Box, Hide, Flex } from "@chakra-ui/react";
import Auth from "../features/auth/Auth";
//import { sidebarImg } from "../assets";
const AuthLayout = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" minH={"100vh"}>
      <Hide below={"md"}>
        <GridItem
          height={"100%"}
          colSpan={{ base: 0, md: 1, lg: 1 }}
          bg="white"
        >
          <Box
            position="relative"
            h={"100vh"}
            bgImage={
              "https://www.channelstv.com/wp-content/uploads/2018/10/PRESIDENT-BUHARI-ATTENDS-NIGERIANS-58TH-INDEPENDENCE-21.jpg"
            }
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            left={0}
            right={0}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              bg="black"
              opacity={0.5}
              bgBlendMode="multiply"
            />
          </Box>
        </GridItem>
      </Hide>

      <GridItem
        bg="#FFF"
        p={{ base: 0, md: 10, lg: 10 }}
        //py={{ base: 10, md: 10, lg: 10 }}
        colSpan={{ base: 3, md: 1, lg: 1 }}
      >
        <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Auth />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;
