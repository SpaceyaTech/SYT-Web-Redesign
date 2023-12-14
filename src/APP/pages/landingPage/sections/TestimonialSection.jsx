import React from "react";
import Marquee from "react-fast-marquee";

import { testimonialData } from "../data";

function TestimonialSection() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] my-4">
          What people are saying...
        </h1>
        <p className="sm:hidden md:block leading-relaxed mb-2 text-base text-center pl-4 md:pl-2 text-[#323433]">
          Made by techies for techies. SpaceYaTech will allow you to accelerate
          your growth and
          <br />
          free you from tutorial hell as per word on the street...
        </p>
      </div>

      <Marquee
        className="py-6 px-3 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-x-auto scrollbar-hide"
        pauseOnHover
        speed={40}
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {testimonialData.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex flex-col w-[320px] h-[340px] sm:h-[300px] sm:w-[480px] items-center justify-center p-2 mx-3 sm:p-8  bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className=" text-gray-500 mb-10 dark:text-gray-400">
                <p className=" leading-relaxed font-normal text-base text-[#323433]">
                  {testimonial.text}
                </p>
              </blockquote>
              <figcaption className=" flex items-center pl-4">
                <img
                  className="rounded-full w-20 h-20"
                  src={testimonial.img}
                  alt=""
                />
                <div className="text-left pl-8">
                  <p className="font-medium">{testimonial.user}</p>
                  <p className=" font-light text-neutral-900">
                    {testimonial.vocation} at
                    <br />{" "}
                    <span className="text-[#00664E] font-medium">
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </figcaption>
            </a>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}

export default TestimonialSection;
