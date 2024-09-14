import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import portfolio from "../../../assets/images/portfolio.png";

function StudentShowcase() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-9 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Projects designed and coded by our alumni
      </h3>

      <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-2 w-full pb-6 border border-red-500">
        {Array.from({ length: 10 }).map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </section>
  );
}

export default StudentShowcase;

function ProjectCard() {
  const design = "#3730A3";
  const designBg = "#E0E7FF";
  const frontend = "#B9146F";
  const frontendBg = "#F3E9F0";
  const fullstack = "#92400E";
  const fullstackBg = "#FEF3C7";
  const cat = "design";

  const customStyle = (category) => {
    switch (category) {
      case "design":
        return "bg-[#E0E7FF] text-[#3730A3]";
      case "frontend":
        return "bg-[#F3E9F0] text-[#B9146F]";
      case "fullstack":
        return "bg-[#FEF3C7] text-[#92400E]";
      default:
        return "text-primary bg-[#ECFDF3]";
    }
  };

  const bgStyle = (category) => {
    switch (category) {
      case "design":
        return "#3730A3";
      case "frontend":
        return "#B9146F";
      case "fullstack":
        return "#92400E";
      default:
        return "#ECFDF3";
    }
  };

  return (
    <div className="border bg-white p-1.5 rounded-xl h-[400px] sm:h-[480px] min-w-[calc(100vw-56px)] sm:min-w-80 sm:w-80 flex flex-col gap-2">
      <LazyLoadImage
        src={portfolio}
        alt="img"
        className="h-3/4 object-cover rounded-t-lg"
      />

      <div className="space-y-2 p-1 h-1/4">
        <h4 className="uppercase text-sm font-semibold text-grey-darker">
          smart warehouse
        </h4>

        <div
          className={`flex items-center gap-2 w-fit py-1 px-3 font-medium rounded-full text-sm ${customStyle("frontend")}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.73552 11.6867C1.78253 12.7511 1.76203 14.3569 2.63665 15.4865C4.37226 17.7281 6.2719 19.6277 8.51351 21.3633C9.64313 22.238 11.2489 22.2175 12.3133 21.2645C15.203 18.6771 17.8494 15.9731 20.4033 13.0016C20.6558 12.7078 20.8137 12.3477 20.8492 11.9619C21.0059 10.2561 21.3279 5.34144 19.9932 4.00675C18.6586 2.67207 13.7439 2.99408 12.0381 3.15083C11.6523 3.18627 11.2922 3.34421 10.9984 3.59671C8.02692 6.15064 5.32291 8.797 2.73552 11.6867Z"
              stroke={`${bgStyle("frontend")}`}
              strokeWidth="1.5"
            />
            <path
              d="M7.5 14.5L9.5 16.5"
              stroke={`${bgStyle("frontend")}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6L22 2"
              stroke={`${bgStyle("frontend")}`}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Frontend Development
        </div>

        <p className="line-clamp-2 text-xs">
          Lorem ipsum dolor sit amet consectetur. Eget enim nam egestas.
        </p>
      </div>
    </div>
  );
}
