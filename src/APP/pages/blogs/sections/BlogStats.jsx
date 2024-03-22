import { useEffect, useState } from "react";
import { thumbsUp } from "../../../../assets/images/blogs-page";
import usePostLikeBlog from "../../../../hooks/Queries/blog/usePostLikeBlog";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogStats = ({ blogId, likes }) => {
  const [updatedLikes, setUpdatedLikes] = useState(likes);

  const {
    setBlogIDLikes: likeBlog,
    error: errorLikeBlog,
    clearError: clearErrorLikeBlog,
    status: statusLikeBlog,
    clearStatus: clearStatusLikeBlog,
  } = usePostLikeBlog();

  const addLikeToBlog = (blogId) => {
    statusLikeBlog === "error" && clearErrorLikeBlog();
    errorLikeBlog && clearErrorLikeBlog();

    const blogDetails = {
      id: blogId,
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
  }, [likes, statusLikeBlog]);

  return (
    <div className="flex flex-row items-center gap-2">
      {/* <div className="flex flex-row items-center gap-1">
        <LazyLoadImage src={eye} alt="eye" className="w-5 h-5 object-cover" effect="blur" />
        <span className="text-base text-[#00664E]">240</span>
      </div> */}

      <div className="flex flex-row items-center gap-1">
        <LazyLoadImage
          src={thumbsUp}
          alt="eye"
          className="w-5 h-5 object-cover cursor-pointer"
          effect="blur"
          onClick={() => {
            blogId ? addLikeToBlog(blogId) : "";
          }}
        />
        <span className="text-base text-[#00664E] leading-5 m-0">
          {updatedLikes}
        </span>
      </div>

      {/* <div className="flex flex-row items-center gap-1">
        <LazyLoadImage src={chatText} alt="eye" className="w-5 h-5 object-cover" effect="blur" />
        <span className="text-base text-[#00664E]">35</span>
      </div> */}
    </div>
  );
};

export default BlogStats;
