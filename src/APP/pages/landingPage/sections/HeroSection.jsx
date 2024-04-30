import React, { useState } from "react";
import JoinSYTModal from "../../community/sections/JoinSYTModal";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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

        <button
          type="button"
          onClick={openModal}
          className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
        >
          Join SpaceYaTech
        </button>
      </div>

      <div className="hidden lg:flex flex-col items-center min-w-[1440px] min-h-[600px] rounded-[70%] relative my-6">
        <div className="relative creative-shapes my-10">
          <div className="ellipse115 rounded-full" />
          <div className="ellipse116 rounded-full" />
          <div className="ellipse117 rounded-full" />
          <div className="ellipse118 rounded-full" />
          <div className="ellipse132 rounded-full" />
          <div className="ellipse119 rounded-full" />
          <div className="ellipse133 rounded-full" />
          <div className="ellipse134 rounded-full" />
          <div className="ellipse172 rounded-full" />
          <div className="ellipse173 rounded-full" />
          <div className="ellipse174 rounded-full" />
          <div className="ellipse175 rounded-full" />
          <div className="ellipse176 rounded-full" />
          <div className="ellipse135 rounded-full" />
          <div className="ellipse136 rounded-full" />
          <div className="ellipse120 rounded-full" />
          <div className="ellipse124 rounded-full" />
          <div className="ellipse125 rounded-full" />
          <div className="ellipse126 rounded-full" />
          <div className="ellipse121 rounded-full" />
          <div className="ellipse127 rounded-full" />
          <div className="ellipse128 rounded-full" />
          <div className="ellipse129 rounded-full" />
          <div className="ellipse130 rounded-full" />
          <div className="ellipse1311 rounded-full" />
          <div className="ellipse122 rounded-full" />
          <div className="ellipse123 rounded-full" />
          <div className="ellipse137 rounded-full" />
          <div className="ellipse138 rounded-full" />
          <div className="ellipse139 rounded-full" />
          <div className="ellipse140 rounded-full" />
          <div className="ellipse141 rounded-full" />
          <div className="ellipse142 rounded-full" />
          <div className="ellipse143 rounded-full" />
          <div className="ellipse144 rounded-full" />
          <div className="ellipse145 rounded-full" />
          <div className="ellipse177 rounded-full" />
          <div className="ellipse178 rounded-full" />
          <div className="ellipse146 rounded-full" />
          <div className="ellipse156 rounded-full" />
          <div className="ellipse157 rounded-full" />
          <div className="ellipse179 rounded-full" />
          <div className="ellipse158 rounded-full" />
          <div className="ellipse164 rounded-full" />
          <div className="ellipse165 rounded-full" />
          <div className="ellipse167 rounded-full" />
          <div className="ellipse168 rounded-full" />
          <div className="ellipse169 rounded-full" />
          <div className="ellipse170 rounded-full" />
          <div className="ellipse171 rounded-full" />
          <div className="ellipse166 rounded-full" />
          <div className="ellipse147 rounded-full" />
          <div className="ellipse148 rounded-full" />
          <div className="ellipse151 rounded-full" />
          <div className="ellipse149 rounded-full" />
          <div className="ellipse152 rounded-full" />
          <div className="ellipse153 rounded-full" />
          <div className="ellipse159 rounded-full" />
          <div className="ellipse160 rounded-full" />
          <div className="ellipse161 rounded-full" />
          <div className="ellipse162 rounded-full" />
          <div className="ellipse163 rounded-full" />
          <div className="ellipse154 rounded-full" />
          <div className="ellipse155 rounded-full" />
          <div className="ellipse150 rounded-full" />
          <div className="ellipse147 rounded-full" />
          <div className="ellipse1411 rounded-full" />
          <div className="ellipse128 rounded-full" />
          <div className="ellipse142 rounded-full" />
          <div className="ellipse175 rounded-full" />
          <div className="ellipse146 rounded-full" />
          <div className="ellipse159 rounded-full" />
          <div className="ellipse167 rounded-full" />
          <div className="ellipse160 rounded-full" />
          <div className="ellipse118 rounded-full" />
          <div className="ellipse138 rounded-full" />
          <div className="ellipse141 rounded-full" />
          <div className="ellipse157 rounded-full" />
          <div className="ellipse132 rounded-full" />
          <div className="ellipse131 rounded-full" />
          <div className="ellipse136 rounded-full" />
          <div className="ellipse124 rounded-full" />
          <div className="ellipse164 rounded-full" />
          <div className="ellipse165 rounded-full" />
          <div className="ellipse148 rounded-full" />
          <div className="ellipse152 rounded-full" />
          <div className="ellipse153 rounded-full" />
          <div className="ellipse155 rounded-full" />
          <div className="ellipse127 rounded-full" />
          <div className="ellipse117 rounded-full" />
        </div>
      </div>

      {/* Image Section */}
      <JoinSYTModal isOpen={isOpen} closeModal={closeModal} />

    </section>
  );
}

export default HeroSection;
