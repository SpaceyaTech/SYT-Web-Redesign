import React, { useEffect, useState } from "react";
import {
  vector1,
  Nairobi,
  Mombasa,
  Tanzania,
} from "../../../../../assets/images/community";
import ChapterCard from "./ChapterCard";
import { fetchChaptersData } from "./data";

function ChaptersSection() {
  const [chaptersData, setChaptersData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const theData = await fetchChaptersData();
        setChaptersData((prevState) => {
          return prevState = theData;
        });
      } catch (error) {
        //Handle error
        console.error("Problem fetching chapters:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {chaptersData ? (
        <div className="my-2">
          <div
            className="h-full items-center justify-center content-between bg-cover bg-no-repeat py-40 md:py-32 text-center p-6"
            style={{ backgroundImage: `url(${vector1}` }}
          >
            <div className="text-white">
              <h2 className="mb-5 text-3xl font-medium">
                SpaceYaTech Chapters
              </h2>
              <p className="mb-10 text-base font-normal">
                Join a SYT chapter near you and connect in person and virtually
                with like-minded individuals
              </p>
              <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 lg:grid-cols-3">
                {chaptersData.map((chapter) => (
                  <ChapterCard {...chapter} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading chapters...</div>
      )}
    </>
  );
}

export default ChaptersSection;
