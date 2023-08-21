import { blogCard } from "../../blogs/data";
import BlogCard from "../../blogs/sections/BlogCard";

const RelatedBlogs = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-16 grid-cols-1 py-16">
      {blogCard.slice(0, 2).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default RelatedBlogs;
