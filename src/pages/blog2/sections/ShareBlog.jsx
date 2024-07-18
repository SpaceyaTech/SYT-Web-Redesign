import PropTypes from "prop-types";
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

function ShareBlog({ url, title }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-primary uppercase font-normal">share it</p>

      <WhatsappShareButton
        url={url}
        separator=":: "
        title={title}
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <WhatsappIcon round size={22} />
      </WhatsappShareButton>

      <FacebookShareButton
        url={url}
        hashtag="SpaceYaTech"
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <FacebookIcon size={22} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        hashtags={["SYT", "SpaceYaTech", "Tech"]}
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <XIcon size={22} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        className="transition-all ease-in duration-300 transform hover:scale-110"
      >
        <LinkedinIcon size={22} round />
      </LinkedinShareButton>
    </div>
  );
}

export default ShareBlog;

ShareBlog.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
