import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

function ShareBlog() {
  return (
    <div className="flex flex-row items-center gap-4">
      <WhatsappShareButton
        url="https://spaceyatech.com/blogs/why-ux-research-is-important-and-how-to-do-it-the-right-way-in-2024"
        separator=":: "
        title="Space ya Tech Getting started or Building your career in Tech"
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <WhatsappIcon round size={22} />
      </WhatsappShareButton>

      <FacebookShareButton
        url="http://localhost:5173/blogs2/leveraging-open-source-to-boost-your-career-in-tech"
        hashtag="SpaceYaTech"
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <FacebookIcon size={22} round />
      </FacebookShareButton>

      <TwitterShareButton
        url="https://spaceyatech.com/blogs/why-ux-research-is-important-and-how-to-do-it-the-right-way-in-2024"
        title="Space ya Tech Getting started or Building your career in Tech"
        hashtags={["SYT", "SpaceYaTech", "Tech"]}
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <XIcon size={22} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url="https://spaceyatech.com/blogs/why-ux-research-is-important-and-how-to-do-it-the-right-way-in-2024"
        title="Space ya Tech Getting started or Building your career in Tech"
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <LinkedinIcon size={22} round />
      </LinkedinShareButton>
    </div>
  );
}

export default ShareBlog;
