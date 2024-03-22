import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import { bannerImg } from "../../../../assets/images/hero-section";
import { partners } from "../data";

function HeroSection() {
  return (
    <section className="pt-5 md:pt-14 flex items-center justify-center flex-col md:gap-9 max-w-[1440px] mx-auto">
      {/* Hero section Description */}
      <div className="px-3 md:px-0 max-w-[625px] flex flex-col items-center gap-4 ">
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
          className="text-white bg-gradient-to-b to-primary from-[#00664E] border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
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

{
  /* hero img */
}
//   <div className="flex-1">
//     <img
//       src={bannerImg}
//       alt="banner"
//       className="w-full h-full object-cover"
//     />
//   </div>
// </div>

{
  /* Partners */
}
// <div className="my-6 flex flex-col items-center gap-6">
//   <h2 className="text-3xl font-semibold">Our Partners</h2>

//   <p className="max-w-[832px] text-center text-base font-normal">
//     At SpaceYaTech, we thrive on innovation, knowledge and the support of
//     our dedicated partners. Join us in celebrating the companies and
//     individuals who make SpaceYaTech possible.
//   </p>

//   <Marquee
//     className="overflow-auto flex flex-row gap-14 w-full items-center"
//     pauseOnHover
//     gradient
//     gradientColor="white"
//     gradientWidth={100}
//   >
//     {partners.map(({ id, img, name, link }) => (
//       <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
//         <img
//           src={img}
//           className="object-cover max-w-none px-7"
//           alt={name}
//         />
//       </a>
//     ))}
//   </Marquee>
// </div>
