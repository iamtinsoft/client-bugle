import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import ProfileSettings from "./ProfileSettings";

const TabComponent = () => {
  return (
    <Tabs colorScheme="yellow" variant="soft-rounded">
      <TabList>
        <Tab>Profile Settings</Tab>
        {/* <Tab>Authentication / Password</Tab>
        <Tab>System Settings</Tab> */}
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>
            <ProfileSettings />
          </p>
        </TabPanel>
        {/* <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel> */}
      </TabPanels>
    </Tabs>
  );
};

export default TabComponent;
