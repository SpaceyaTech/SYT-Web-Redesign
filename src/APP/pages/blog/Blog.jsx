import { blog4 } from "../../../assets/images/blogs-page";
import BlogStats from "../blogs/sections/BlogStats";
import BlogWrapper from "./sections/BlogWrapper";

const Blog = () => {
  return (
    <section className="flex flex-col p-4 md:p-8 lg:p-10">
      <img
        src={blog4}
        alt="blog"
        className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
      />

      <div className="flex flex-row items-center justify-between">
        <p className="text-[#4C4D4D] text-sm  md:text-base font-bold">
          Sat May 6th
        </p>

        <BlogStats />
      </div>

      <BlogWrapper />
    </section>
  );
};

export default Blog;
