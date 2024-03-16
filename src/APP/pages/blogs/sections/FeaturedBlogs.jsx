import React from "react";
import { featured, plasma } from "../../../../assets/images/blogs-page";

function FeaturedBlogs() {
  const handleToggle = () => {};
  return (
    <div
      className="w-full my-6 md:my-10 aspect-video bg-center bg-cover size-full md:rounded-2xl relative px-4 md:px-10 py-6 md:py-12 flex flex-col gap-5 items-start justify-end"
      style={{ backgroundImage: `url("${plasma}")` }}
    >
      <h4 className="text-primary text-xl font-semibold">Featured</h4>
      <div className="flex space-x-8 text-white w-full flex-row">
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-[#CBCDCC] text-[33px] tracking-wide leading-normal font-normal">
            How the role of a Software Engineer is changing with the advent of
            capable AI: Is there a future?
          </h2>

          <p className="text-base font-normal max-w-5xl line-clamp-5">
            ChatGPT-4 and CoPilot are becoming increasingly powerful, thanks to
            the LLM backing them and the constant feed of training data. What is
            the future of the much revered software engineer? ChatGPT-4 and
            CoPilot are becoming increasingly powerful, thanks to the LLM
            backing them and the constant feed of training data. What is the
            future of the much revered software engineer? ChatGPT-4 and CoPilot
            are becoming increasingly powerful, thanks to the LLM backing them
            and the constant feed of training data. What is the future of the
            much revered software engineer?
          </p>
        </div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleToggle}
          className="mt-3"
        >
          <path
            d="M28 0C12.5612 0 0 12.5612 0 28C0 43.4388 12.5612 56 28 56C43.4388 56 56 43.4388 56 28C56 12.5612 43.4388 0 28 0ZM28 4.30769C41.1105 4.30769 51.6923 14.8895 51.6923 28C51.6923 41.1105 41.1105 51.6923 28 51.6923C14.8895 51.6923 4.30769 41.1105 4.30769 28C4.30769 14.8895 14.8895 4.30769 28 4.30769ZM24.1662 13.5262L21.0646 16.6277L32.4455 28L21.0689 39.3723L24.1705 42.4738L37.0935 29.5508L38.5711 28L37.0914 26.4492L24.1662 13.5262Z"
            fill="#CBCDCC"
          />
        </svg>
      </div>
    </div>
  );
}

export default FeaturedBlogs;
