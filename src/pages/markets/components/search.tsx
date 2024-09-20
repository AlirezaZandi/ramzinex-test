import { useEffect, useState } from "react";
import { useSearchFilter } from "../hooks/useSearchFilter";
import { useDebounce } from "@uidotdev/usehooks";
import Input from "../../../components/uikit/input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { searchTerm, setSearchTerm } = useSearchFilter();
  const [searchValue, setSearchValue] = useState(searchTerm);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearchValue);
  }, [debouncedSearchValue, setSearchTerm]);

  return (
    <Input
      value={searchValue}
      onChange={e => setSearchValue(e.currentTarget.value)}
      rightIcon={<AiOutlineSearch size={25} className="fill-text-low" />}
      className="flex-1"
    />
  );
};

export default Search;
