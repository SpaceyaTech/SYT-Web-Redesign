/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function ImageCard({ photos }) {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        spacing={0}
        onClick={({ index }) => setIndex(index)}
        // targetRowHeight={450}
        renderPhoto={({ wrapperStyle, renderDefaultPhoto }) => (
          <div style={wrapperStyle} className="relative">
            {renderDefaultPhoto({ wrapped: true })}

            {/* <div className="absolute top-0 right-0 w-full h-full flex opacity-0 transition-all duration-500 ease-linear hover:opacity-100">
              <div className="bg-transparent w-1/2 h-full" />
              <div className="bg-[#00664E] text-white w-1/2 h-full flex items-center justify-center flex-col gap-2">
                <span className="text-xs font-normal">Jan 12, 2023</span>

                <div className="w-1/5 h-[2px] bg-white rounded-sm" />

                <h4 className="text-lg font-medium text-center">SYT Meetup</h4>
              </div>
            </div> */}
          </div>
        )}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
}

export default ImageCard;
