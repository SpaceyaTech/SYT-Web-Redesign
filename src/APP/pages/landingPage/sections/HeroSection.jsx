import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="py-16 flex items-center justify-center flex-col md:gap-10 max-w-1440 mx-auto">
      {/* Hero section Description */}
      <div className="px-3 md:px-0 max-w-[625px] flex flex-col items-center gap-4">
        <h1 className="md:text-[40px] text-2xl leading-tight  font-medium text-gray-900 text-center">
          Accelerating <span className="text-primary">growth </span>
          and
          <span className="text-primary"> potential </span>
          of tech enthusiasts
        </h1>

        <p className="text-sm md:text-xl font-normal leading-normal text-center">
          SpaceYaTech is the fastest growing Africa, open-source community
          looking to change the way young Africans get started in technology.
        </p>

        <Link
          to="/community"
          preventScrollReset={true}
          className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
        >
          Join SpaceYaTech
        </Link>
      </div>

      <div className="bg-primary w-full h-72 hidden lg:flex"></div>

      {/* Image Section */}
    </section>
  );
}

export default HeroSection;
