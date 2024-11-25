import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Flex as={Box} w={"100%"}>
      <Flex
        bg={"#EDF2F7"}
        p={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={600} fontSize={"sm"}>
          Search
        </Text>
      </Flex>
      <form>
        <Input
          w={"100%"}
          onKeyUp={() => onSearch(ref.current?.value ?? "")}
          ref={ref}
          border={"solid white 2px"}
          borderRadius={0}
          placeholder="..."
          //variant="filled"
          _focus={{ boxShadow: "none" }}
        />
      </form>
    </Flex>
  );
};

export default SearchInput;
