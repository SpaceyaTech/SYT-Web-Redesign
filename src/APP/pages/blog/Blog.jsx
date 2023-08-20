import Banner from "./sections/Banner";
import BlogsWrapper from "./sections/BlogsWrapper";

const Blog = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <Banner />
      <BlogsWrapper />
    </section>
  );
};

export default Blog;
