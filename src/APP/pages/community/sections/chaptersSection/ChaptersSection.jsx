import React from "react";
import {
  vector1,
  Nairobi,
  Mombasa,
  Tanzania,
} from "../../../../../assets/images/community";
import ChapterCard from "./ChapterCard";

const chapters = [
  {
    location: "SYT Nairobi, Kenya",
    members: "1000 members",
    image: Nairobi,
    id: 1,
  },
  {
    location: "SYT Mombasa, Kenya",
    members: "70 members",
    image: Mombasa,
    id: 2,
  },
  {
    location: "SYT Dar es salaam, Tanzania",
    members: "50 members",
    image: Tanzania,
    id: 3,
  },
];
function ChaptersSection() {
  return (
    <div className="my-2">
      <div
        className="h-full items-center justify-center content-between bg-cover bg-no-repeat py-40 md:py-32 text-center p-6"
        style={{ "background-image": `url(${vector1}` }}
      >
        <div className="text-white">
          <h2 className="mb-5 text-3xl font-medium">SpaceYaTech Chapters</h2>
          <p className="mb-10 text-base font-normal">
            Join a SYT chapter near you and connect in person and virtually with
            like-minded individuals
          </p>
          <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 lg:grid-cols-3">
            {chapters.map(({ location, members, image, id }) => (
              <ChapterCard
                key={id}
                location={location}
                members={members}
                image={image}
                id={id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChaptersSection;
