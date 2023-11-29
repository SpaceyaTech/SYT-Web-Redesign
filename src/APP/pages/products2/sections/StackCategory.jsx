import React from "react";

const StackCategory = ({ category, stack }) => {
  return (
    <div className="border border-[#CBCDCC] rounded-3xl p-3 md:p-6 flex flex-col gap-4 md:gap-4 w-full h-fit sm:w-[364px]">
      <h3 className="pl-8 md:pl-4 text-lg md:text-2xl font-medium">
        {category}
      </h3>
      <div className="flex flex-row items-center gap-6 md:gap-4 px-3 flex-wrap justify-center">
        {stack.map(({ url, alt }) => (
          <img
            key={alt}
            src={url}
            alt={alt}
            className="h-16 md:h-20 w-16 md:w-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default StackCategory;
