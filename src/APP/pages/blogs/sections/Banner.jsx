import React, { useContext } from "react";

import { search } from "../../../../assets/images/blogs-page";
import { SearchBlogContext } from "../../../../context/searchBlog";

function Banner() {
  const { searchText, setSearchText } = useContext(SearchBlogContext);

  return (
    <div className="relative bg-blog-image bg-cover bg-center bg-no-repeat h-60 w-full">
      <div className="absolute inset-0 flex flex-col gap-4 md:gap-8 items-center justify-center w-[80%] mx-auto md:w-[716px]">
        <h2 className="text-3xl font-normal text-white">Blogs</h2>

        <form className="flex items-center border-2 border-white px-4 py-2 md:py-3 rounded-full w-full gap-1">
          <input
            type="text"
            placeholder="Search"
            className="w-9/10 flex-grow py-2 bg-transparent text-white text-base placeholder:text-white outline-none border-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="w-1/10 p-2">
            <img src={search} alt="search" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
