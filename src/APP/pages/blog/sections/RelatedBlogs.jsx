import { blog1, blog2 } from "../../../../assets/images/blogs-page";
import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import BlogCard from "../../blogs/sections/BlogCard";

export const blogCard = [
  {
    id: 1,
    image: blog1,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 2,
    image: blog2,
    title: "Protopie for Ae enthusiasts",
    desc: "This article introduces Protopie, a design and animation tool for creating interactive prototypes. The author discusses...",
    author: "Jane Njeri",
    date: "6 days ago",
  },
];

function RelatedBlogs({ categoryId }) {
  const { data, isLoading, isError, isSuccess } =
    useRelatedBlogsData(categoryId);

  console.log("Related blogs: ", data);
  return (
    <div className="grid sm:grid-cols-2 gap-16 grid-cols-1 py-16">
      {blogCard.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default RelatedBlogs;
