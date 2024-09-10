/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { award, calendar, dotpoints, folder } from "@/assets/images/icons";
import workers from "@/assets/images/mastercraft/workers.png";

function Header() {
  return (
    <section className="w-full flex items-center flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 md:justify-between">
      {/* Left */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <h2 className="max-w-fit text-primary text-sm leading-loose px-3 bg-gradient-to-r from-[#D7F4EB] to-white py-1.5 rounded-full font-semibold border-2 border-gray-300 uppercase">
          product design
        </h2>

        <div className="space-y-3 md:space-y-4">
          <div className="space-y-2">
            <div className="max-w-fit px-4 py-1.5 text-error-text bg-error-bg rounded-2xl flex items-center gap-2 text-xs leading-normal font-medium">
              <div className="bg-red-500 size-2 rounded-full" /> Registration is
              open
            </div>

            <h2 className="text-3xl font-semibold">
              Introduction to Product Design
            </h2>

            <p className="text-base normal">
              Jumpstart your UI/UX design career with out comprehensive 2-month
              boot camp on user experience and visual design.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductInfo
              icon={dotpoints}
              title="14 topics"
              description="Covering UX design principles and UI design best practices"
            />
            <ProductInfo
              icon={award}
              title="Intermediate level"
              description="Recommended experience level"
            />
            <ProductInfo
              icon={folder}
              title="2 Projects"
              description="Collaborate on two portfolio projects"
            />
            <ProductInfo
              icon={calendar}
              title="Flexible schedules"
              description="Covering UX design principles and UI design best practices"
            />
          </div>

          <div className="flex items-center flex-col md:flex-row gap-2 md:gap-6">
            <button
              type="button"
              className="text-white bg-green-dark rounded px-6 py-2 text-sm font-semibold transition-all border border-green-dark ease-in duration-500 hover:bg-transparent hover:text-green-dark"
            >
              Enroll
            </button>

            <p className="underline text-green-dark text-sm leading-4">
              Next cohort opens on 15th September
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="bg-white w-full md:w-1/2 border rounded-lg flex-center p-1">
        <div className="bg-[#E5EFEC] rounded-md w-full pt-2 pb-6 px-2 space-y-4">
          <LazyLoadImage
            src={workers}
            alt="workers"
            className="w-full object-cover rounded-lg"
          />

          <div className="flex items-center flex-wrap gap-4">
            <p className="capitalize bg-white py-1.5 px-3 border rounded-full text-green-header text-sm font-semibold">
              UX Design
            </p>
            <p className="capitalize bg-white py-1.5 px-3 border rounded-full text-green-header text-sm font-semibold">
              UX Design
            </p>
            <p className="capitalize bg-white py-1.5 px-3 border rounded-full text-green-header text-sm font-semibold">
              Prototyping
            </p>
            <p className="capitalize bg-white py-1.5 px-3 border rounded-full text-green-header text-sm font-semibold">
              Product Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

function ProductInfo({ icon, title, description }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <img src={icon} alt={title} />
        <h6 className="text-sm font-semibold text-[#252533]">{title}</h6>
      </div>

      <p className="text-[#475467] text-xs leading-relaxed">{description}</p>
    </div>
  );
}
