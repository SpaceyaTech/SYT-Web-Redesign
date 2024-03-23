import React from "react";
import { advert } from "../../../../assets/images/blogs-page";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Advert() {
  return (
    <div className="hidden md:flex h-32 w-full">
      <LazyLoadImage src={advert} alt="advert" className="h-full w-full" />
    </div>
  );
}

export default Advert;
