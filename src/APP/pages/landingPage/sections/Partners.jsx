import React from "react";
import { partners } from "../data";

function Partners() {
  return (
    <section className="my-8 py-6 md:py-16 flex flex-col gap-6 md:gap-8 border-blue-500">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h4 className="min-w-fit text-sm md:text-3xl font-semibold">
          Our Esteemed Partners
        </h4>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>

      <div className="max-w-6xl mx-auto overflow-auto flex flex-row md:flex-wrap md:justify-center gap-6 md:space-x-14 md:space-y-8 w-full items-center px-4">
        {partners.map(({ id, img, name }) => (
          <img
            key={id}
            src={img}
            className="object-cover h-11 grayscale transition-all duration-200 ease-in hover:grayscale-0"
            alt={name}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
