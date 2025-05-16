import React from "react";

import x from "../../../assets/images/resources-page/icons/twitter-x.svg";

function XFeedback() {
  return (
    <div className="p-8 md:p-16 lg:p-24 flex-center">
      <div className="max-w-4xl  flex flex-col items-center gap-3">
        <img src={x} alt="twitter-x" className="size-6 object-contain" />

        <p className="text-center text-base md:text-lg font-medium text-[#5C5C5C]">
          Mastercraft is what every techie getting ready to interview for their
          first role needs. The program is tailored to sharpen your technical
          skills to see you ace technical and behavioral interviews. I am
          speaking as a mentor in the program
        </p>

        <div className="flex-center flex-col gap-0.5">
          <h4 className="text-base md:text-lg font-semibold">Belinda Koech</h4>
          <small className="text-sm text-[#5C5C5C]">@uxbesh</small>
        </div>
      </div>
    </div>
  );
}

export default XFeedback;
