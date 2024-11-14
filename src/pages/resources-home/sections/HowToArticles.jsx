import React from "react";

import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";

function HowToArticles() {
  return (
    <div className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5">
      <div className="flex items-center w-full flex-col gap-8 md:gap-12 lg:gap-16">
        {/* How-to-articles: Expanding your understanding */}
        <div className="md:self-start flex flex-col gap-8 md:gap-10 w-full">
          <div className="flex items-center justify-between text-center md:text-left flex-col md:flex-row gap-3">
            <h3 className="text-2xl md:text-3xl text-green-dark font-semibold">
              How-to-articles: Expanding your understanding
            </h3>
            <Link
              to="/resources"
              className="text-sm xl:text-base leading-tight font-normal text-primary underline"
            >
              Explore all tutorials
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>

        {/* Recommended tutorials for beginners  */}
        <div className="md:self-start flex flex-col gap-8 md:gap-10 w-full">
          <div className="flex items-center justify-between text-center md:text-left flex-col md:flex-row gap-3">
            <h3 className="text-2xl md:text-3xl text-green-dark font-semibold">
              Recommended tutorials for beginners
            </h3>
            <Link
              to="/resources"
              className="text-sm xl:text-base leading-tight font-normal text-primary underline"
            >
              Explore all tutorials
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToArticles;
