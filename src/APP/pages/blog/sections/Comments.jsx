import {
  Ellipse30,
  chatText,
  reply,
} from "../../../../assets/images/blogs-page";
import CommentInput from "./CommentInput";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CommentCard = () => {
  return (
    <div className="flex flex-col gap-3 items-start border-b border-[#25253380] pb-3">
      <div className="flex flex-row w-full items-center justify-between gap-4">
        <div className="flex gap-2 md:gap-3">
          <LazyLoadImage
            src={Ellipse30}
            alt="author"
            className="w-8 h-8 rounded-full object-contain"
            effect="blur"
          />

          <div className="flex flex-col md:flex-row md:gap-10 text-[13px] leading-5 md:text-base font-normal text-black">
            <h5>Sharon Makena</h5>
            <span className="text-gray-500">3 days ago</span>
          </div>
        </div>

        <button className="flex flex-row gap-1">
          <LazyLoadImage
            src={reply}
            alt="reply"
            className="w-4 h-4 object-contain"
            effect="blur"
          />
          <span className="text-[13px] text-[#00664E] capitalize">Reply</span>
        </button>
      </div>

      <p className="text-xs font-normal">
        Lorem ipsum dolor sit amet consectetur. Nunc duis purus eu non posuere.
        Suspendisse pretium lobortis convallis massa tempor in. Tincidunt sit
        amet venenatis nibh ut nunc at erat sollicitudin. Gravida ultrices
        faucibus facilisis tortor enim nulla turpis.
      </p>
      <button className="flex flex-row gap-1">
        <LazyLoadImage
          src={chatText}
          alt="chatText"
          className="w-4 h-4 object-contain"
          effect="blur"
        />
        <span className="text-xs font-normal text-[#00664E]">35</span>
      </button>
    </div>
  );
};

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 items-start">
      <span className="text-base md:text-xl text-[#323433] font-normal">
        Comments(35)
      </span>

      <div className="relative flex flex-col w-full gap-4 overflow-scroll h-[600px] md:h-[540px]">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentInput />
      </div>
    </div>
  );
};

export default Comments;
