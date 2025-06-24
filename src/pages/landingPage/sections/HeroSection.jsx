import React, { useState, useEffect, useRef } from "react";
import JoinSYTModal from "../../community/sections/JoinSYTModal";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // Hero Image Animation

  const containerRef = useRef(null);

  useEffect(() => {
    const ellipses = containerRef.current.querySelectorAll(".ellipse");

    ellipses.forEach((ellipse) => {
      const currentEllipse = ellipse;
      currentEllipse.style.transitionDuration = `${Math.random() * 12 + 8}s`;

      const animate = () => {
        currentEllipse.style.transform = `translate(${Math.random() * 100 - 50}%, ${
          Math.random() * 100 - 50
        }%) rotate(${Math.random() * 0}deg)`;
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, 7000);
      };

      animate();
    });
  }, []);

  return (
    <section className=" flex items-center justify-center flex-col md:gap-10 max-w-1440 mx-auto">
      {/* Hero section Description */}
      <div className="px-3 mt-32 max-md:mt-24 md:px-0 max-w-[625px] flex flex-col items-center gap-4">
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
          id="hero-join-button"
          type="button"
          aria-label="Join"
          onClick={openModal}
          className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
        >
          Join SpaceYaTech
        </button>
      </div>

      <div className="hidden md:block lg:flex flex-col items-center min-w-[1440px] min-h-[600px] rounded-[70%] relative my-6">
        <div className="relative creative-shapes my-10" ref={containerRef}>
          <div className="ellipse ellipse115 rounded-full" />
          <div className="ellipse ellipse116 rounded-full" />
          <div className="ellipse ellipse117 rounded-full" />
          <div className="ellipse ellipse118 rounded-full" />
          <div className="ellipse ellipse132 rounded-full" />
          <div className="ellipse ellipse119 rounded-full" />
          <div className="ellipse ellipse133 rounded-full" />
          <div className="ellipse ellipse134 rounded-full" />
          <div className="ellipse ellipse172 rounded-full" />
          <div className="ellipse ellipse173 rounded-full" />
          <div className="ellipse ellipse174 rounded-full" />
          <div className="ellipse ellipse175 rounded-full" />
          <div className="ellipse ellipse176 rounded-full" />
          <div className="ellipse ellipse135 rounded-full" />
          <div className="ellipse ellipse136 rounded-full" />
          <div className="ellipse ellipse120 rounded-full" />
          <div className="ellipse ellipse124 rounded-full" />
          <div className="ellipse ellipse125 rounded-full" />
          <div className="ellipse ellipse126 rounded-full" />
          <div className="ellipse ellipse121 rounded-full" />
          <div className="ellipse ellipse127 rounded-full" />
          <div className="ellipse ellipse128 rounded-full" />
          <div className="ellipse ellipse129 rounded-full" />
          <div className="ellipse ellipse130 rounded-full" />
          <div className="ellipse ellipse1311 rounded-full" />
          <div className="ellipse ellipse122 rounded-full" />
          <div className="ellipse ellipse123 rounded-full" />
          <div className="ellipse ellipse137 rounded-full" />
          <div className="ellipse ellipse138 rounded-full" />
          <div className="ellipse ellipse139 rounded-full" />
          <div className="ellipse ellipse140 rounded-full" />
          <div className="ellipse ellipse141 rounded-full" />
          <div className="ellipse ellipse142 rounded-full" />
          <div className="ellipse ellipse143 rounded-full" />
          <div className="ellipse ellipse144 rounded-full" />
          <div className="ellipse ellipse145 rounded-full" />
          <div className="ellipse ellipse177 rounded-full" />
          <div className="ellipse ellipse178 rounded-full" />
          <div className="ellipse ellipse146 rounded-full" />
          <div className="ellipse ellipse156 rounded-full" />
          <div className="ellipse ellipse157 rounded-full" />
          <div className="ellipse ellipse179 rounded-full" />
          <div className="ellipse ellipse158 rounded-full" />
          <div className="ellipse ellipse164 rounded-full" />
          <div className="ellipse ellipse165 rounded-full" />
          <div className="ellipse ellipse167 rounded-full" />
          <div className="ellipse ellipse168 rounded-full" />
          <div className="ellipse ellipse169 rounded-full" />
          <div className="ellipse ellipse170 rounded-full" />
          <div className="ellipse ellipse171 rounded-full" />
          <div className="ellipse ellipse166 rounded-full" />
          <div className="ellipse ellipse147 rounded-full" />
          <div className="ellipse ellipse148 rounded-full" />
          <div className="ellipse ellipse151 rounded-full" />
          <div className="ellipse ellipse149 rounded-full" />
          <div className="ellipse ellipse152 rounded-full" />
          <div className="ellipse ellipse153 rounded-full" />
          <div className="ellipse ellipse159 rounded-full" />
          <div className="ellipse ellipse160 rounded-full" />
          <div className="ellipse ellipse161 rounded-full" />
          <div className="ellipse ellipse162 rounded-full" />
          <div className="ellipse ellipse163 rounded-full" />
          <div className="ellipse ellipse154 rounded-full" />
          <div className="ellipse ellipse155 rounded-full" />
          <div className="ellipse ellipse150 rounded-full" />
          <div className="ellipse ellipse1411 rounded-full" />
        </div>
      </div>

      {/* Image Section */}
      <JoinSYTModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </section>
  );
}

export default HeroSection;
