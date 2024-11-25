import SearchInput from "../../../components/common/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const UserSearchBox = ({ onSearch }: Props) => {
  return <SearchInput onSearch={onSearch} />;
};

export default UserSearchBox;
