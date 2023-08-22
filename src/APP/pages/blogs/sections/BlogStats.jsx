import { chatText, eye, thumbsUp } from "../../../../assets/images/blogs-page";

const BlogStats = () => {
  return (
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
  );
};

export default BlogStats;
