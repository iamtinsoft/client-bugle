import { Box } from "@chakra-ui/react";

const MainLayout = ({ Navbar, Feature, Footer }: any) => {
  return (
    <Box bg={"#EDF2F6"}>
      <Navbar />
      <Box>
        <Feature />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
