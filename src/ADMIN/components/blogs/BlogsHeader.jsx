import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function BlogsHeader({ pageType }) {
  const navigate = useNavigate();

  const ActiveBtnClasses =
    "bg-[#009975] text-center text-white rounded-lg border-0 py-3 px-5 sm:px-8 w-full sm:w-52 hover:bg-white hover:border hover:border-[#009975] hover:text-[#009975] focus:outline-none";
  const SecondaryBtnClasses =
    "hover:bg-[#009975] text-center text-[#009975] hover:text-white rounded-lg border py-3 px-5 sm:px-8 w-full sm:w-52 border-[#009975] focus:outline-none";

  return (
    <div className="flex flex-col sm:flex-row space-y-4 items-start sm:items-center justify-between mb-14">
      <h1 className="text-2xl items-start sm:items-center">
        {pageType === "CreatePost" ? "Create Post" : "Manage Posts"}
      </h1>
      <div className="flex w-full sm:w-auto flex-row gap-8 items-center">
        <button
          type="button"
          className={
            pageType === "CreatePost" ? ActiveBtnClasses : SecondaryBtnClasses
          }
          onClick={() => navigate("/admin/blogs/create-post")}
        >
          Create Post
        </button>

        <button
          type="button"
          className={
            pageType === "CreatePost" ? SecondaryBtnClasses : ActiveBtnClasses
          }
          onClick={() => navigate("/admin/blogs/manage-posts")}
        >
          Manage Posts
        </button>
      </div>
    </div>
  );
}

export default BlogsHeader;

BlogsHeader.propTypes = {
  pageType: PropTypes.oneOf(["CreatePost", "ManagePosts"]),
};

BlogsHeader.defaultProps = {
  pageType: "CreatePost",
};
