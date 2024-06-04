import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import processPhotos from "../../../utilities/processPhotos";
import photosData from "./data";
import ImageCard from "./sections/ImageCard";

function GalleryPage() {
  const [isActive, setIsActive] = useState(false);

  const photos = processPhotos(photosData);

  return (
    <main className="bg-[#d9d9d9]/30 font-spaceGrotesk pb-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="flex md:items-center flex-col md:flex-row gap-4 justify-between pt-8 pl-2 md:pl-0">
          <Link
            to="/community"
            className="border rounded-full bg-white p-1 w-fit"
          >
            <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
              <PiArrowCircleLeftLight
                className="text-green-header"
                size="25px"
              />
              <span className="capitalize text-green-header text-sm font-semibold">
                Go Back
              </span>
            </div>
          </Link>

          <h1 className="text-base font-medium uppercase text-grey-neutral">
            SpaceYaTech Gallery | Collection 2024
          </h1>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 grid-flow-dense">
          {photosData.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div> */}

        {/* <div
          className="grid grid-cols-4 grid-rows-3 gap-4 grid-flow-dense"
          // style={{ gridAutoRows: "217px" }}
        >
          {photosData.map((photo, index) => {
            let style = {};
            switch (index % 7) {
              case 0:
                style = {
                  gridColumn: "span 2",
                  gridRow: "span 1",
                };
                break;
              case 1:
              case 2:
                style = { gridColumn: "span 1", gridRow: "span 1" };
                break;
              case 3:
                style = { gridColumn: "span 1", gridRow: "span 2" };
                break;
              case 4:
              case 5:
                style = { gridColumn: "span 1", gridRow: "span 1" };
                break;
              case 6:
                style = { gridColumn: "span 2", gridRow: "span 2" };
                break;
              default:
                break;
            }
            return <ImageCard key={photo.id} photo={photo} style={style} />;
          })}
        </div> */}

        {/* <div
          className="grid grid-cols-4 grid-rows-3 grid-flow-dense gap-4"
          style={{ gridAutoRows: "108.5px" }}
        >
          <div className="col-span-2">
            <ImageCard key={photosData[0].id} photo={photosData[0]} />
          </div>
          <div className="col-start-3">
            <ImageCard key={photosData[1].id} photo={photosData[1]} />
          </div>
          <div className="col-start-4">
            <ImageCard key={photosData[2].id} photo={photosData[2]} />
          </div>
          <div className="row-span-2 row-start-2">
            <ImageCard key={photosData[3].id} photo={photosData[3]} />
          </div>
          <div className="row-start-2">
            <ImageCard key={photosData[4].id} photo={photosData[4]} />
          </div>
          <div className="col-start-2 row-start-3">
            <ImageCard key={photosData[5].id} photo={photosData[5]} />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-2">
            <ImageCard key={photosData[6].id} photo={photosData[6]} />
          </div>
        </div> */}

        {/* Gallery library */}
        <div className="overflow-y-auto h-full">
          <ImageCard photos={photos} />
        </div>
      </div>
    </main>
  );
}

export default GalleryPage;
