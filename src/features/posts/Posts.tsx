import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { yellowColor } from "../../constants";
import AllPosts from "./components/AllPosts";
import ArchivedPosts from "./components/ArchivedPosts";

const Posts = () => {
  return (
    <Box p={3}>
      <Box borderRadius={8} my={3} bg={"#fff"} p={3}>
        <Tabs>
          <TabList>
            <Tab _selected={{ color: yellowColor, borderColor: yellowColor }}>
              All Posts
            </Tab>
            <Tab _selected={{ color: yellowColor, borderColor: yellowColor }}>
              Archived Posts
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                <AllPosts />
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <ArchivedPosts />
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Posts;
