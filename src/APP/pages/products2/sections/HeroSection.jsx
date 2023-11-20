import React from "react";

function HeroSection() {
  return (
    <div className="py-4 md:py-8 flex flex-col gap-6 md:gap-8 items-center justify-center md:max-w-4xl mx-auto">
      {/* text section */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[#009975] text-base md:text-2xl font-normal text-center capitalize">
          Our products
        </h3>
        <p className="text-center text-[25px] leading-9 md:text-[33px] font-medium md:font-semibold md:leading-normal px-4">
          We don’t just talk about code. We build products that work and look
          good.
        </p>
      </div>

      {/* video section */}
      <div className="w-full">
        <video
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
          controls
          className="h-full w-fit aspect-video"
          autoPlay={false}
          controlsList="nodownload"
          muted
        />
      </div>
    </div>
  );
}

export default HeroSection;
