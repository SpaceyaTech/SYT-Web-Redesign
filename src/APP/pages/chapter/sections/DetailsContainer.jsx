import React from "react";

function DetailsContainer({title, paragraph}) {
  return (
    <div className="px-6 ">
      <div className="text-left mt-6">
        <p className="text-l text-[#323433] font-normal mb-6">
          {title}
        </p>
        <p className="text-base text-[#323433] font-light mb-6">{paragraph}</p>
      </div>
    </div>
  );
}

export default DetailsContainer;
