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
        // targetRowHeight={450}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={wrapperStyle}>
            {renderDefaultPhoto({ wrapped: true })}
          </div>
        )}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[
          // Fullscreen,
          //   Slideshow,
          Thumbnails,
          Zoom,
        ]}
      />
    </div>
  );
}

export default ImageCard;
