import React from "react";
import StackCategory from "./StackCategory";
import { stackCollection } from "../data";

function TechStack() {
  return (
    <div className="px-4 md:px-8 py-6 md:py-12 flex flex-col md:justify-between md:flex-row gap-5 md:gap-6">
      <h5 className="font-medium md:text-3xl lg:text-5xl text-2xl leading-[38px] md:leading-[64px] lg:leading-[48px] md:max-w-[430px]">
        Crafted with world-class Tech stacks
      </h5>

      <div className="flex flex-col md:flex-row md:justify-end gap-6">
        <div className="flex flex-col gap-6">
          {stackCollection.slice(0, 2).map(({ id, category, stack }) => (
            <StackCategory key={id} category={category} stack={stack} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {stackCollection.slice(2, 4).map(({ id, category, stack }) => (
            <StackCategory key={id} category={category} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
