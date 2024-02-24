import React from "react";
import Carousel from "./Carousel";

function NextRead() {
  return (
    <div className="mx-auto max-w-[924px] flex flex-col gap-6 items-center px-3 ">
      <h4 className="text-xl font-semibold leading-normal">Read Next</h4>

      <div className="">
        <Carousel />
      </div>
    </div>
  );
}

export default NextRead;
