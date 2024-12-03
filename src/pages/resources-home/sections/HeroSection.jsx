import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { hero } from "../../../assets/images/resources-page";
import img3 from "../../../assets/Landing Page Images/Ellipse 127.png";
import img2 from "../../../assets/Landing Page Images/Ellipse 128.png";
import img4 from "../../../assets/Landing Page Images/Ellipse 148.png";
import img from "../../../assets/Landing Page Images/Ellipse 159.png";

function HeroSection() {
  return (
    <div className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5">
      <div className="flex items-center justify-between gap-5 w-full flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="max-w-fit text-primary text-xs leading-loose px-3 bg-gradient-to-r from-[#D7F4EB] to-white py-1 rounded-full font-semibold border-2 border-gray-300 uppercase">
            spaceyatech learning
          </h4>

          <h1 className="text-2xl md:text-4xl md:leading-tight text-green-hero font-semibold">
            Accelerate your learning with crowdsourced
            <span className="text-orange-hero"> tutorials.</span>
          </h1>

          <p className="text-base md:text-xl">
            We have harnessed the power of community to curate a resource bank
            of the best videos, tutorials, GitHub repositories and links in all
            the stacks you use.
          </p>

          <div className="flex items-center gap-2 md:gap-4">
            <ul className="flex list-none">
              <li className="size-12 rounded-full overflow-hidden -mr-5">
                <img src={img} alt="" className="size-full object-cover" />
              </li>
              <li className="size-12 rounded-full overflow-hidden -mr-5">
                <img src={img3} alt="" className="size-full object-cover" />
              </li>
              <li className="size-12 rounded-full overflow-hidden -mr-5">
                <img src={img2} alt="" className="size-full object-cover" />
              </li>
              <li className="size-12 rounded-full overflow-hidden">
                <img src={img4} alt="" className="size-full object-cover" />
              </li>
            </ul>

            <p className="text-base md:text-lg text-gray-400">
              100+ contributors
            </p>
          </div>

          <button
            type="button"
            className="bg-green-dark rounded text-white py-3 px-8 text-sm font-bold border border-green-dark hover:bg-transparent hover:text-green-dark transition-colors duration-300 ease-in"
          >
            Add a resource
          </button>
        </div>

        <LazyLoadImage
          className="w-full object-contain"
          src={hero}
          effect="blur"
          alt="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
