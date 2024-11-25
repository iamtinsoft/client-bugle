import { Box, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const CustomSearch = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box w={"100%"}>
      <form>
        <Input
          w={"100%"}
          onKeyUp={() => onSearch(ref.current?.value ?? "")}
          ref={ref}
          border={"solid gainsboro 0px"}
          borderRadius={5}
          placeholder="Search ..."
          variant="filled"
          _focus={{ boxShadow: "none" }}
        />
      </form>
      {/* <Flex
        bg={"#EDF2F7"}
        p={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={600} fontSize={"sm"}>
          Search
        </Text>
      </Flex> */}
    </Box>
  );
};

export default CustomSearch;
