import React from "react";
import {
  google,
  google2,
  nairobi1,
  nairobi2,
  uiux,
  uiux2,
} from "../../../../../assets/images/community";
import PartnerCard from "./PartnerCard";

const chapters = [
  { image: google2, backgroundColor: "#FFFFFF" },
  { image: uiux2, backgroundColor: "#000000" },
  { image: nairobi2, backgroundColor: "#F5F3F3" },
];
function PartnerSection() {
  return (
    <div className="px-6 py-12 text-center">
      <div className="text-[#323433]">
        <h2 className="mb-5 text-3xl font-medium">
          SpaceYaTech Partner Communities
        </h2>
        <p className="mb-10 text-base font-medium">
          We don’t gatekeep! Here are some awesome tech communities you can also
          join courtesy of SpaceYaTech
        </p>
        <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 lg:grid-cols-3">
          {chapters.map(({ image, backgroundColor }) => (
            <PartnerCard
              key={crypto.randomUUID()}
              image={image}
              backgroundColor={backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
