import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImg from "../../../assets/images/mastercraft/mastercraft-hero.png";
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
            mastercraft program
          </h4>

          <h1 className="text-2xl md:text-4xl md:leading-snug">
            <span className="text-green-dark font-semibold">Fast-track </span>
            your path to the
            <span className="text-green-dark font-semibold">
              {" "}
              tech job market
            </span>
          </h1>

          <p className="text-base md:text-xl">
            Learn from the best teachers in the Kenyan tech market, horning your
            craft with our completely free and comprehensive learning programme.
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
              Trusted by 600+ students
            </p>
          </div>
        </div>

        <LazyLoadImage
          className="w-full object-contain"
          src={heroImg}
          effect="blur"
          alt="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
