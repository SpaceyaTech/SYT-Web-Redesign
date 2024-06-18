/* eslint-disable react/prop-types */
import React from "react";

function LandingWrapper({ children, title }) {
  return (
    <section className="flex flex-col gap-4 md:gap-8 my-10 md:my-20">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          {title}
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>
      {children}
    </section>
  );
}

export default LandingWrapper;
