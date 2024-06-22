import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <form className="flex justify-between w-full relative ">
      <input
        type="text"
        placeholder="Search item"
        className="rounded-l-lg pl-16 text-sm shadow-sm w-full border outline-none py-3 text-gray-600 "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <IoMdSearch className="absolute top-3 left-8 text-gray-400 " size={24} />
      <button
        type="submit"
        className="text-white text-sm  bg-gradient-to-b to-primary from-green-dark py-2 px-4 md:px-20 rounded-r-lg"
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};
export default SearchInput;
