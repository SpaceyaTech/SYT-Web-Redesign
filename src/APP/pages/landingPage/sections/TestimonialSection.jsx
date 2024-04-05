/* eslint-disable react/prop-types */
import React from "react";
import Marquee from "react-fast-marquee";

import { testimonialData } from "../data";

function TestimonialSection() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-8 pt-2">
      <h3 className="w-full max-w-md text-green-header text-center font-semibold text-xl md:text-3xl">
        What people are saying about us{" "}
      </h3>

      <Marquee pauseOnHover speed={40} autoFill={false}>
        <div className="flex items-center gap-4 px-2">
          {testimonialData.map(({ id, text, user, vocation, img }) => (
            <TestimonialCard
              img={img}
              key={id}
              text={text}
              user={user}
              vocation={vocation}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default TestimonialSection;

function TestimonialCard({ img, text, user, vocation }) {
  return (
    <div className="border-2 bg-white rounded-xl aspect-video px-8 py-8 flex-between flex-col gap-2 min-h-64 max-w-md w-screen sm:w-full md:gap-4">
      <p className="text-wrap text-sm font-normal text-left w-full">{text}</p>
      <div className="flex-between flex-row w-full">
        <div className="flex flex-col text-sm gap-1 capitalize">
          <h6 className="font-light">{user}</h6>
          <p className="font-normal">{vocation}</p>
        </div>

        <img
          className="rounded-full size-12 object-contain"
          src={img}
          alt={user}
        />
      </div>
    </div>
  );
}
