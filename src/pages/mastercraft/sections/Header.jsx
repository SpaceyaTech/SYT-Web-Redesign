/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation, useNavigate } from "react-router-dom";

function Header({
  isRegOpen,
  category,
  cover,
  description,
  nextCohortDate,
  productInfo,
  tags,
  title,
}) {
  const { pathname } = useLocation();
  const isEnroll = pathname.endsWith("enroll");
  const words = pathname.split("/");
  const topic = words[words.length - 1];
  const navigate = useNavigate();

  return (
    <section className="w-full flex items-center flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 md:justify-between">
      {/* Left */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <h2 className="max-w-fit text-primary text-sm leading-loose px-3 bg-gradient-to-r from-[#D7F4EB] to-white py-1.5 rounded-full font-semibold border-2 border-gray-300 uppercase">
          {category}
        </h2>

        <div className="space-y-3 md:space-y-4">
          <div className="space-y-2">
            <div
              className={`max-w-fit px-4 py-1.5  rounded-2xl flex items-center gap-2 text-xs leading-normal font-medium ${isRegOpen ? "bg-green-light text-primary" : "text-error-text bg-error-bg"}`}
            >
              <div
                className={`${isRegOpen ? "bg-primary" : "bg-red-500"} size-2 rounded-full`}
              />{" "}
              Registration is {isRegOpen ? "open" : "closed"}
            </div>

            <h2 className="text-3xl font-semibold">{title}</h2>

            <p className="text-base normal">{description}</p>
          </div>

          <div className="bg-white border rounded-lg p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {productInfo?.map((info) => (
              <ProductInfo
                key={info.title}
                icon={info.icon}
                title={info.title}
                description={info.description}
              />
            ))}
          </div>

          <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-6 py-6 md:py-0">
            <button
              type="button"
              disabled={!isRegOpen || isEnroll}
              onClick={() => navigate(`/mastercraft/${topic}/enroll`)}
              aria-disabled={!isRegOpen || isEnroll}
              className={`text-white rounded px-6 py-2 text-sm font-semibold transition-all border ease-in duration-500 w-fit
    ${
      !isRegOpen || isEnroll
        ? "bg-[#999999] border-[#999999] cursor-not-allowed opacity-80"
        : "bg-green-dark border-green-dark hover:bg-transparent hover:text-green-dark"
    }
  `}
            >
              Enroll
            </button>

            <p className="underline text-green-dark text-sm leading-4">
              Next cohort opens on {nextCohortDate}
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="bg-white w-full md:w-1/2 border rounded-lg flex-center p-1">
        <div className="bg-[#E5EFEC] rounded-md w-full pt-2 pb-6 px-2 space-y-4">
          <LazyLoadImage
            src={cover}
            alt="workers"
            className="w-full object-cover rounded-lg"
          />

          <div className="flex items-center flex-wrap gap-4">
            {tags?.map((tag) => (
              <p
                key={tag}
                className="capitalize bg-white py-1.5 px-3 border rounded-full text-green-header text-sm font-semibold"
              >
                {tag}
              </p>
            ))}
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
