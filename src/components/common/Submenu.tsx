import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  Box,
} from "@chakra-ui/react";

const Submenu = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"none"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Assumenda, quia temporibus</ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Submenu;
