import { Box } from "@chakra-ui/react";
import CustomSearch from "../../../components/common/CustomSearch";
interface Props {
  onSearch: (searchText: string) => void;
}
const ConversationSearchBox = ({ onSearch }: Props) => {
  return (
    <Box p={2} mb={2}>
      <CustomSearch onSearch={onSearch} />
    </Box>
  );
};

export default ConversationSearchBox;
