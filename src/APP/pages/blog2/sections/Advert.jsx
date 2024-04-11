import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { advert } from "../../../../assets/images/blogs-page";

function Advert() {
  return (
    <div className="hidden md:flex h-32 w-full">
      <LazyLoadImage src={advert} alt="advert" className="h-full w-full" />
    </div>
  );
}

export default Advert;
