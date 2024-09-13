import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import portfolio from "../../../assets/images/portfolio.png";

function Portfolio() {
  return (
    <div className="space-y-2 w-full">
      <h3 className="text-green-header text-3xl font-semibold">Portfolio</h3>

      <p className="text-base text-grey-dark leading-8">
        Projects designed by our alumni
      </p>

      <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-2 w-full md:w-auto pb-6">
        {Array.from({ length: 10 }).map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

function ProjectCard() {
  return (
    <div className="border bg-white p-1.5 rounded-xl h-[400px] sm:h-[420px] min-w-[calc(100vw-56px)] sm:min-w-80 sm:w-80 flex flex-col gap-3">
      <LazyLoadImage
        src={portfolio}
        alt="img"
        className="h-4/5 object-cover rounded-t-lg"
      />

      <div className="space-y-2 p-1 h-1/5">
        <h4 className="uppercase text-sm font-semibold text-grey-darker">
          smart warehouse
        </h4>

        <p className="line-clamp-2 text-xs">
          Lorem ipsum dolor sit amet consectetur. Eget enim nam egestas.
        </p>
      </div>
    </div>
  );
}
