import React, { useState } from "react";
import { Link } from "react-router-dom";

import photosData from "./data";
import ImageCard from "./sections/ImageCard";
import processPhotos from "../../../utilities/processPhotos";

function GalleryPage() {
  const [isActive, setIsActive] = useState(false);

  const photos = processPhotos(photosData);

  return (
    <main className="max-w-[1440px] mx-auto flex flex-col gap-8 ">
      <div className="flex flex-col gap-2 pt-2 px-5 md:px-10">
        <Link
          to="/community"
          className="flex items-center gap-1 text-sm font-medium"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {isActive ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.68281 10.4425L8.30781 16.0675C8.42509 16.1848 8.58415 16.2507 8.75 16.2507C8.91585 16.2507 9.07491 16.1848 9.19219 16.0675C9.30946 15.9503 9.37535 15.7912 9.37535 15.6253C9.37535 15.4595 9.30946 15.3004 9.19219 15.1832L4.63359 10.6253H16.875C17.0408 10.6253 17.1997 10.5595 17.3169 10.4423C17.4342 10.3251 17.5 10.1661 17.5 10.0003C17.5 9.83459 17.4342 9.67562 17.3169 9.55841C17.1997 9.4412 17.0408 9.37535 16.875 9.37535H4.63359L9.19219 4.81753C9.30946 4.70026 9.37535 4.5412 9.37535 4.37535C9.37535 4.2095 9.30946 4.05044 9.19219 3.93316C9.07491 3.81588 8.91585 3.75 8.75 3.75C8.58415 3.75 8.42509 3.81588 8.30781 3.93316L2.68281 9.55816C2.6247 9.61621 2.5786 9.68514 2.54715 9.76101C2.5157 9.83688 2.49951 9.91821 2.49951 10.0003C2.49951 10.0825 2.5157 10.1638 2.54715 10.2397C2.5786 10.3156 2.6247 10.3845 2.68281 10.4425Z"
                fill="#009975"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.68281 10.4425L8.30781 16.0675C8.42509 16.1848 8.58415 16.2507 8.75 16.2507C8.91585 16.2507 9.07491 16.1848 9.19219 16.0675C9.30946 15.9503 9.37535 15.7912 9.37535 15.6253C9.37535 15.4595 9.30946 15.3004 9.19219 15.1832L4.63359 10.6253H16.875C17.0408 10.6253 17.1997 10.5595 17.3169 10.4423C17.4342 10.3251 17.5 10.1661 17.5 10.0003C17.5 9.83459 17.4342 9.67562 17.3169 9.55841C17.1997 9.4412 17.0408 9.37535 16.875 9.37535H4.63359L9.19219 4.81753C9.30946 4.70026 9.37535 4.5412 9.37535 4.37535C9.37535 4.2095 9.30946 4.05044 9.19219 3.93316C9.07491 3.81588 8.91585 3.75 8.75 3.75C8.58415 3.75 8.42509 3.81588 8.30781 3.93316L2.68281 9.55816C2.6247 9.61621 2.5786 9.68514 2.54715 9.76101C2.5157 9.83688 2.49951 9.91821 2.49951 10.0003C2.49951 10.0825 2.5157 10.1638 2.54715 10.2397C2.5786 10.3156 2.6247 10.3845 2.68281 10.4425Z"
                fill="#323433"
              />
            </svg>
          )}

          <span
            className={`${
              isActive ? "text-[#009975]" : "text-black"
            } text-base`}
          >
            BACK
          </span>
        </Link>

        <div className="flex flex-col gap-3 items-center text-center mt-5 md:items-start md:text-left max-w-4xl">
          <h3 className="text-3xl font-normal">SpaceYaTech Gallery</h3>

          <p className="text-base font-normal text-[#323433]">
            SpaceYaTech is a fast growing tech community born out of a need for
            a space for young techies to find communities to help them
            accelerate in their careers. The community targets all sectors in
            the tech industry and provides online communities to network, learn
            and grow for techies at all stages in their career.
          </p>
        </div>
      </div>

      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 grid-flow-dense">
        {photosData.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div> */}

      <div className="overflow-y-auto h-full">
        <ImageCard photos={photos} />
      </div>
    </main>
  );
}

export default GalleryPage;
