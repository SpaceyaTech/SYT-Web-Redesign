import React from "react";
import {
  vector1,
  // Nairobi,
  // Mombasa,
  // Tanzania,
} from "../../../../../assets/images/community";
import ChapterCard from "./ChapterCard";
import useChaptersData from "../../../../../hooks/Queries/community/useChaptersData";
import { Loader } from "../../../../components";
import Error500 from "../../../errorPages/Error500";

function ChaptersSection() {
  const {
    data: chaptersData,
    isPending,
    isError,
    isSuccess,
  } = useChaptersData();

  return (
    <div className="my-2">
      <div
        className="h-full items-center justify-center content-between bg-cover bg-no-repeat py-40 md:py-32 text-center p-6"
        style={{ backgroundImage: `url(${vector1}` }}
      >
        <div className="text-white">
          <h2 className="mb-5 text-3xl font-medium">SpaceYaTech Chapters</h2>
          <p className="mb-10 text-base font-normal">
            Join a SYT chapter near you and connect in person and virtually with
            like-minded individuals
          </p>
          <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 lg:grid-cols-3">
            {isError && <Error500 />}
            {isPending && (
              <div className="flex flex-col items-center justify-center gap-4 py-10">
                <Loader />
                <p className="text-lg font-medium text-primary">
                  Loading chapters...
                </p>
              </div>
            )}
            {isSuccess && Array.isArray(chaptersData) && chaptersData
              ? chaptersData.map(
                  ({ country, members, banner, id, name, city }) => (
                    <ChapterCard
                      name={name}
                      city={city}
                      country={country}
                      members={members}
                      banner={banner}
                      id={id}
                      key={id}
                    />
                  )
                )
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChaptersSection;
