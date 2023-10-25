import React from "react";

function DetailsContainer({ about }) {
  return (
    <div className="px-6 ">
      <div className="text-left mt-6">
        <p className="text-l text-[#323433] font-normal mb-6">
          About This Chapter
        </p>
        <p className="text-base text-[#323433] font-light mb-6">{about}</p>
      </div>
    </div>
  );
}

export default DetailsContainer;
