import { useNavigate, Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

import { arrowRight } from "../../../../assets/images/blogs-page";
import logo from "../../../../assets/images/sytLogo.png";
import BlogStats from "./BlogStats";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const timeAgo = formatDistanceToNow(new Date(blog.created_at), {
    addSuffix: true,
  });
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="flex flex-col items-start w-full mb-5"
    >
      <img
        src={blog.image}
        alt="blog"
        className="w-full h-60 object-cover rounded-lg"
      />

      <div className="py-[6px] flex flex-col gap-[10px] w-full mt-2">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
          <h3 className="text-xl text-[#323433] font-semibold">{blog.title}</h3>

          <BlogStats likes={blog.likes <= 1 ? "" : blog.likes} />
        </div>

        <p className="text-base font-normal leading-6 flex flex-wrap text-[#4C4D4D] line-clamp-2">
          {blog.description}
        </p>

        <div className="flex flex-row items-start justify-between">
          <div className="flex gap-[10px]">
            <img
              src={logo}
              alt="icon"
              className="w-10 h-10 object-cover bg-gray-200 flex items-center justify-center p-1 rounded-full"
            />

            <div className="flex flex-col gap-1 text-sm">
              <h4 className=" font-medium text-[#323433]">{blog.author}</h4>

              <span className="text-[#656767]">{timeAgo}</span>
            </div>
          </div>

          <button
            className="flex gap-2 items-center justify-between"
            onClick={() => {
              navigate(`/blogs/${blog.id}`);
            }}
          >
            <span className="uppercase text-primary text-sm font-medium m-0">
              read more
            </span>
            <img src={arrowRight} alt="arrow-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
