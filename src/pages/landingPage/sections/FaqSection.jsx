import React from "react";

import { FAQ } from "../../../components";
import { questions } from "../data";

function FaqSection() {
  return (
    <section className="w-full max-w-1440 mx-auto flex-center flex-col gap-8 px-3 pt-2">
      <div className="flex-center gap-4 flex-col w-full max-w-2xl text-center">
        <h3 className="max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
          Got Questions?
        </h3>

        <p className="text-sm md:text-base font-normal">
          Whether you&apos;re a newcomer looking to learn more about our
          platform or a seasoned member in need of a refresher, we&apos;ve got
          you covered.
        </p>
      </div>

      <FAQ questions={questions} />
    </section>
  );
}

export default FaqSection;
