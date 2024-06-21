import React from "react";
import {
  google2,
  nairobi2,
  uiux2,
} from "../../../../assets/images/community";
import PartnerCard from "./PartnerCard";

const chapters = [
  {
    image: google2,
    backgroundColor: "#FFFFFF",
    link: "https://opensource.google/",
  },
  {
    image: uiux2,
    backgroundColor: "#000000",
    link: "https://uxkitchenke.com/",
  },
  {
    image: nairobi2,
    backgroundColor: "#F5F3F3",
    link: "https://friends.figma.com/nairobi/",
  },
];
function PartnerSection() {
  return (
    <div className="px-6 py-12 text-center">
      <div className="text-[#323433]">
        <h2 className="mb-5 text-3xl font-medium">
          SpaceYaTech Partner Communities
        </h2>
        <p className="mb-10 text-base font-medium">
          We don&apos;t gatekeep! Here are some awesome tech communities you can
          also join courtesy of SpaceYaTech
        </p>
        <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 lg:grid-cols-3">
          {chapters.map(({ image, backgroundColor, link }) => (
            <PartnerCard
              key={crypto.randomUUID()}
              image={image}
              backgroundColor={backgroundColor}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
