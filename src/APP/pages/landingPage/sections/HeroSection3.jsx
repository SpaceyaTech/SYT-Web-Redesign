import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { partners } from "../data";
import { bannerImg } from "../../../../assets/images/hero-section";
import "./../../../../index.css";

function HeroSection3() {
  return (
    <section className="p-3 md:px-10 flex flex-col items-center justify-center gap-2 max-w-[1440px] mx-auto">
      {/* Hero Header */}
      <div className="flex flex-col items-center justify-center gap-8 md:gap-4 max-w-[670px]">
        {/* hero desc */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center md:text-center">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900">
            Accelerate your <span className="text-primary">growth</span> and{" "}
            <span className="text-primary">potential</span> of the tech
            enthusiasts
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed">
            SpaceYaTech is the fastest growing Africa, open-source community
            looking to change the way young Africans get started in technology.
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

        <div className="flex flex-col items-center min-w-[1440px] min-h-[600px] rounded-[70%] relative my-10">
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
              <img
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
