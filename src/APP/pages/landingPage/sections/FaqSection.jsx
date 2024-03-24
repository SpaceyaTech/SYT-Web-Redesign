import React from "react";

import { FAQ } from "../../../components";
function FaqSection() {
  return (
    <section className="w-full max-w-1440 mx-auto flex-center flex-col gap-8 px-3 pt-2">
      <div className="flex-center gap-4 flex-col w-full max-w-2xl text-center">
        <h3 className="max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
          Got Questions?{" "}
        </h3>

        <p className="text-sm md:text-base font-normal">
          Whether you're a newcomer looking to learn more about our platform or
          a seasoned member in need of a refresher, we've got you covered.
        </p>
      </div>

      <FAQ />
    </section>
  );
}

export default FaqSection;

{
  /* <div className="container px-5 py-8 max-w-[1440px] mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h2 className="text-xs text-[#BDF16D] tracking-widest font-medium title-font mb-1">
      Got questions?
    </h2>
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
      Frequently Asked Questions
    </h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-xs md:text-sm text-white py-3">
      Whether you're a newcomer looking to learn more about our platform
      or a seasoned member in need of a refresher, we've got you covered.
    </p>
  </div>
  <FAQ />
</div> */
}
