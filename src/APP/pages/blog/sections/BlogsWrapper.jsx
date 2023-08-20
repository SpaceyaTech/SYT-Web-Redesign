import { blogCard, blogCat } from "../data";
import BlogCard from "./BlogCard";

const BlogsWrapper = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-8 md:gap-16 px-4 pt-4 xl:px-14 w-full mb-10 md:mb-40">
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
      <div className="grid sm:grid-cols-2  gap-16 grid-cols-1">
        {blogCard.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsWrapper;
