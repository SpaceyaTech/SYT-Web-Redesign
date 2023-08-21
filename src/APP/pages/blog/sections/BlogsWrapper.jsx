import { blogCard, blogCat } from "../data";
import BlogCard from "./BlogCard";

const FilterBtns = () => {
  return (
    <div className="w-max overflow-scroll md:overflow-auto flex flex-row items-center gap-3">
      {blogCat.map((blog) => (
        <span
          key={blog.id}
          className="bg-gray-100 text-black text-sm py-1 px-3 rounded-2xl cursor-pointer transition-all duration-500 ease-in hover:bg-[#009975] hover:text-white active:bg-[#009975] active:text-white w-fit whitespace-normal"
        >
          {blog.cat}
        </span>
      ))}
    </div>
  );
};

const SearchResults = ({ searchText }) => {
  return (
    <h3 className="text-black text-xl md:text-3xl font-semibold leading-8 md:leading-loose text-center">
      Showing results for “{searchText}”
    </h3>
  );
};

const BlogsWrapper = ({ searchText }) => {
  return (
    <div className="flex flex-col items-start md:items-center gap-8 md:gap-16 px-4 pt-4 xl:px-14 w-full mb-10 md:mb-40">
      {searchText ? <SearchResults searchText={searchText} /> : <FilterBtns />}
      <div className="grid sm:grid-cols-2  gap-16 grid-cols-1">
        {blogCard.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsWrapper;
