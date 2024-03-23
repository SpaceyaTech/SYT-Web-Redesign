/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import { whatWeDoData } from "../data";
import { arrowRight } from "@/assets/images/icons";

function WhatWeDo() {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex flex-col items-center gap-8 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Getting into tech can be hard, but it doesn’t have to be
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-20 gap-5">
        {whatWeDoData.map((card, i) => (
          <WhatWeDoCard key={card.id} index={i} card={card} />
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;

function WhatWeDoCard({ card, index }) {
  const { title, description, image, link } = card;
  return (
    <div
      className={`border bg-white p-2 w-full rounded-2xl md:rounded-[20px] ${
        index === 0 && "md:col-span-2"
      }`}
    >
      <div
        className={`bg-green-light rounded-lg md:rounded-xl flex items-center justify-between flex-row p-6 ${
          index === 0 && " md:py-20 md:gap-5"
        }`}
      >
        <div
          className={`flex-center md:flex-start flex-col p-6 gap-3 ${
            index === 0 && "gap-4"
          }`}
        >
          <h4 className="text-green-header capitalize text-base md:text-xl font-semibold">
            {title}
          </h4>

          <p className="text-sm md:text-base font-normal text-center md:text-start">
            {description}
          </p>

          <Link to={link} className="border rounded-full bg-white p-1 w-fit">
            <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
              <span className="capitalize text-green-header text-sm font-semibold">
                Learn more
              </span>
              <img src={arrowRight} alt="arrow-right" className="size-5" />
            </div>
          </Link>
        </div>

        <img
          src={image}
          alt={title}
          className={`${
            index === 0 ? "hidden md:flex" : "hidden"
          } md:size-52 lg:size-64 object-contain rounded-xl`}
        />
      </div>
    </div>
  );
}
