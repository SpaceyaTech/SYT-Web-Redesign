/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { services } from "../data";
import { serviceImg } from "../../../../assets/images/services-section";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SytServices({ service }) {
  const { img, title, description, link } = service;
  return (
    <div className="p-4 flex flex-col md:flex-row">
      <div className="inline-flex items-center justify-center mb-4 flex-shrink-0">
        <LazyLoadImage src={img} alt={title} />
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-[#F7F7F7] text-2xl title-font font-medium mb-2">
          {title}
        </h2>
        <p className="text-[#F7F7F7] leading-relaxed text-base">
          {description}
        </p>
        <a
          className="mt-3 text-[#00664E] inline-flex items-center bg-white p-3 rounded-lg cursor-pointer"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="text-gray-600 body-font flex items-center bg-[#F7F7F7] mx-auto justify-center">
      <div className="flex-half w-1/2 hidden md:flex justify-end">
        <LazyLoadImage
          className="object-cover object-center rounded"
          alt="services"
          src={serviceImg}
        />
      </div>

      <div className="w-full flex justify-start flex-col flex-wrap bg-[#00664E] lg:py-6 md:flex-half lg:pl-12 lg:text-left text-center">
        <div className="max-w-[720px]">
          <div className="flex flex-col gap-y-4 mt-4 mb-4 md:mb-10">
            <h2 className="text-sm text-[#BDF16D] tracking-widest font-medium title-font mb-1">
              How we work
            </h2>
            <h1 className="sm:text-3xl text-2xl tracking-wide font-medium title-font text-white">
              Getting into tech can be hard, but it doesn’t have to be
            </h1>
          </div>

          {services.map((service) => (
            <SytServices key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
