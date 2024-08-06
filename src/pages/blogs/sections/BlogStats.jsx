import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { PiThumbsUp } from "react-icons/pi";
import usePostLikeBlog from "../../../hooks/Queries/blog/usePostLikeBlog";

function BlogStats({ blogId, likes }) {
  const [updatedLikes, setUpdatedLikes] = useState(likes);

  const {
    setBlogIDLikes: likeBlog,
    error: errorLikeBlog,
    clearError: clearErrorLikeBlog,
    status: statusLikeBlog,
    clearStatus: clearStatusLikeBlog,
  } = usePostLikeBlog();

  const addLikeToBlog = (blogID) => {
    // eslint-disable-next-line no-unused-expressions
    statusLikeBlog === "error" && clearErrorLikeBlog();
    // eslint-disable-next-line no-unused-expressions
    errorLikeBlog && clearErrorLikeBlog();

    const blogDetails = {
      id: blogID,
    };

    likeBlog({ ...blogDetails });
  };

  useEffect(() => {
    if (statusLikeBlog === "success") {
      const newLikes = likes + 1;
      setUpdatedLikes(newLikes);
    }
    clearStatusLikeBlog();
    clearErrorLikeBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes, statusLikeBlog]);

  return (
    <div className="flex flex-row items-center gap-2">
      {/* <div className="flex flex-row items-center gap-1">
        <LazyLoadImage  src={eye} alt="eye" className="w-5 h-5 object-cover" />
        <span className="text-base text-[#00664E]">240</span>
      </div> */}

      <div className="flex flex-row items-center gap-1">
        <PiThumbsUp
          className="w-5 h-5 object-cover text-[#00664E] cursor-pointer"
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            blogId ? addLikeToBlog(blogId) : "";
          }}
        />
        <span className="text-base text-[#00664E] leading-5 m-0">
          {updatedLikes}
        </span>
      </div>

      {/* <div className="flex flex-row items-center gap-1">
        <LazyLoadImage  src={chatText} alt="eye" className="w-5 h-5 object-cover" />
        <span className="text-base text-[#00664E]">35</span>
      </div> */}
    </div>
  );
}

export default BlogStats;

BlogStats.propTypes = {
  blogId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
