import { Box } from "@chakra-ui/react";
import TabComponent from "./components/TabComponent";

const Settings = () => {
  return (
    <Box p={3} bg={"#fff"}>
      {/* <Flex my={5} justifyContent={"space-between"}>
        <Heading fontSize={26}>Settings</Heading>
      </Flex> */}
      <TabComponent />
    </Box>
  );
};

export default Settings;
