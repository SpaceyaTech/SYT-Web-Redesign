import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { partners } from "../data";
import { bannerImg } from "../../../../assets/images/hero-section";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeroSection3() {
  return (
    <section className="p-3 md:px-10 flex flex-col gap-2 max-w-[1440px] mx-auto">
      {/* Hero Header */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-4">
        {/* hero desc */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900 text-center md:text-left">
            Accelerate your <span className="text-primary">growth</span> and
            unlock your potential in the tech ecosphere
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed text-center md:text-left">
            The fastest growing Africa, open-source community looking to change
            the way young Africans get started in technology.
          </p>

          <Link
            to="/community"
            preventScrollReset={true}
            className="text-white bg-primary border-0 py-3 px-8 focus:outline-none rounded-lg text-lg w-full md:w-fit text-center"
          >
            Join the community
          </Link>
        </div>

        {/* hero img */}
        <div className="flex-1">
          <LazyLoadImage
            src={bannerImg}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Partners */}
      <div className="my-6 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold">Our Partners</h2>

        <p className="max-w-[832px] text-center text-base font-normal">
          At SpaceYaTech, we thrive on innovation, knowledge and the support of
          our dedicated partners. Join us in celebrating the companies and
          individuals who make SpaceYaTech possible.
        </p>

        <Marquee
          className="overflow-auto flex flex-row gap-14 w-full items-center"
          pauseOnHover
          gradient
          gradientColor="white"
          gradientWidth={100}
        >
          {partners.map(({ id, img, name, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
              <LazyLoadImage
                src={img}
                className="object-cover max-w-none px-7"
                alt={name}
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default HeroSection3;
