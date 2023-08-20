import {
  Ellipse30,
  arrowRight,
  blog1,
  chatText,
  eye,
  thumbsUp,
} from "../../../../assets/images/blogs-page";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <img
        src={blog.image}
        alt="blog"
        className="flex-1 w-full h-60 object-cover rounded-lg"
      />

      <div className="flex-1 py-[6px] flex flex-col gap-[10px] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
          <h3 className="text-xl text-[#323433] font-semibold">{blog.title}</h3>

          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-1">
              <img src={eye} alt="eye" className="w-5 h-5 object-cover" />
              <span className="text-base text-[#00664E]">240</span>
            </div>

            <div className="flex flex-row items-center gap-1">
              <img src={thumbsUp} alt="eye" className="w-5 h-5 object-cover" />
              <span className="text-base text-[#00664E]">20</span>
            </div>

            <div className="flex flex-row items-center gap-1">
              <img src={chatText} alt="eye" className="w-5 h-5 object-cover" />
              <span className="text-base text-[#00664E]">35</span>
            </div>
          </div>
        </div>

        <p className="text-base font-normal leading-6 flex flex-wrap text-[#4C4D4D] line-clamp-2">
          {blog.desc}
        </p>

        <div className="flex flex-row items-start justify-between">
          <div className="flex gap-[10px]">
            <img
              src={Ellipse30}
              alt="icon"
              className="w-10 h-10 object-cover rounded-full"
            />

            <div className="flex flex-col gap-1 text-sm">
              <h4 className=" font-medium text-[#323433]">{blog.author}</h4>

              <span className="text-[#656767]">{blog.date}</span>
            </div>
          </div>

          <button className="flex gap-2 items-center">
            <span className="uppercase text-[#009975] text-sm font-medium">
              read more
            </span>
            <img src={arrowRight} alt="arrow-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
