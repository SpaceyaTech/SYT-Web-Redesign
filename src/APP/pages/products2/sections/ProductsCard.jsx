import React from "react";
import { upleft } from "../../../../assets/images/icons";

const ProductsCard = ({ name, desc, img, link, index }) => {
  return (
    <div
      style={
        index % 2 === 0
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      className="flex flex-col md:items-center gap-2 md:gap-6 my-3 md:my-0"
    >
      {/* desc */}
      <div className="flex-1 flex flex-col gap-1 md:gap-6 max-w-[532px]">
        <h3 className="text-[25px] md:text-4xl lg:text-5xl xl:text-6xl leading-9 lg:leading-normal xl:leading-relaxed font-medium">
          {name}
        </h3>
        <p className="text-base md:text-lg font-normal">{desc}</p>

        {/* view btn */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-row items-center justify-center gap-2 bg-[#009975] py-3 px-4 h-fit rounded-lg w-fit"
        >
          <span className="text-base font-medium text-white capitalize">
            View product
          </span>
          <img src={upleft} alt="view btn" className="w-6 h-6 object-contain" />
        </a>
      </div>

      {/* pic */}
      <div className="flex-1  min-h-full pb-14">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* view btn */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-center gap-2 bg-[#009975] py-3 px-4 h-fit rounded-lg md:hidden w-fit"
      >
        <span className="text-base font-medium text-white capitalize">
          View product
        </span>
        <img src={upleft} alt="view btn" className="w-6 h-6 object-contain" />
      </a>
    </div>
  );
};

export default ProductsCard;
