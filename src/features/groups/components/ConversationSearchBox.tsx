import SearchInput from "../../../components/common/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const ConversationSearchBox = ({ onSearch }: Props) => {
  return <SearchInput onSearch={onSearch} />;
};

export default ConversationSearchBox;
