import { fetchAllForms } from "@/lib/data";
import SearchInput from "./SearchInput";
import SearchMobile from "./SearchMobile";

const Search = async () => {
  const forms = await fetchAllForms();

  return (
    <>
      <SearchInput forms={forms} />
      <SearchMobile />
    </>
  );
};

export default Search;
