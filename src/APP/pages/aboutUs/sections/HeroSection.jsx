import React from "react";
import { about2, heroImg } from "../../../../assets/images/aboutPage";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeroSection() {
  return (
    <div className="px-0 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="md:bg-[#E5EFEC] md:border-solid md:border md:border-[#00664E] rounded-2xl relative md:pt-10 lg:pt-5 xl:pt-10 px-4 md:px-7 md:pb-14 lg:pb-7 xl:pb-14 mt-16 md:my-32 w-full md:w-[85%] min-h-96">
        <div className="bg-[#E5EFEC] border-solid border border-[#00664E] md:border-none space-y-4 py-8 lg:py-0 pl-4 md:pl-0 mb-4 rounded-lg">
          <h2 className="mt-3 text-primary inline-flex items-center font-medium text-xl">
            About us
          </h2>
          <h3 className="md:text-3xl text-md mb-4 font-semibold w-3/5 md:w-1/2 lg:w-3/5 xl:w-1/2 leading-6 md:leading-10">
            A community of innovators, building a space for African tech
            talents...
          </h3>
        </div>
        <p className="leading-6 w-full md:w-1/2 text-base">
          SpaceYaTech is a language and stack agnostic community of technology
          enthusiasts with membership across Kenya, Tanzania, Nigeria and
          pockets of Africa. We welcome techies from all backgrounds to build a
          vibrant community of innovators of tech, users of tech and tech
          evangelists.
        </p>
        <LazyLoadImage
          src={heroImg}
          alt="space ya tech"
          className="absolute -top-8 md:-top-24 lg:-top-8 xl:-top-28 right-0 md:-right-36 lg:-right-48 xl:-right-48 w-2/6 md:w-auto lg:w-[70%]"
          effect="blur"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:my-20 min-h-96 px-4 ">
        <div className="my-10">
          <LazyLoadImage src={about2} alt="space ya tech" effect="blur" />
        </div>
        <div className="leading-6 md:w-1/2 text-base space-y-4 md:pl-10">
          <p>
            Our activities center around designing and building software and
            hardware solutions for the most salient needs we see in the society,
            through a unique open-source model that gets our community members
            paid for their skills. SpaceYaTech also aims to develop capacity in
            the fields of software development and design to help build the
            future workforce and start-up founders in Africa.
          </p>
          <p>
            We aim to be an inclusive community, where the contributions of
            everyone who wishes to join and be part of a movement to transform
            Africa through, can be appreciated and celebrated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
