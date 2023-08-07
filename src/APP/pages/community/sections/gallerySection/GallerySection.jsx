/* eslint-disable react/prop-types */

import {
  galleryimage1, galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage6, galleryimage7, galleryimage8,galleryimage9
} from '../../../../../assets/images/community';

// const photos = [{ image:galleryimage1}, { image:galleryimage2 }, { image: galleryimage3 }, { image: galleryimage4}, { image: galleryimage5 }, { image: galleryimage6}, { image: galleryimage7}, { image: galleryimage8}]
function GallerySection() {
  // border-2  rounded-2xl
  return (
    <div
      className="pb-12 text-center "
    >
      <h2 className="mb-10 text-3xl font-medium">Gallery</h2>
      <div>
        <div className="-m-1 flex  md:-m-2">
          <div className="flex w-3/8 flex-wrap">
            <div className="w-1/3">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage1}
              />
            </div>
            <div className="w-1/3">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage7}
              />
            </div>
            <div className="w-1/3">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage9}
              />
              
            </div>
            <div className="w-full">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage2}
              />
              
            </div>
          </div>
          <div className="flex w-3/8 flex-wrap">
            <div className="w-full">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage4}
              />
            </div>
            <div className="w-1/2">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage6}
              />
            </div>
            <div className="w-1/2">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage5}
              />
            </div>
        
          </div>
          <div className="flex w-1/4 flex-wrap">
            <div className="w-full">
              <img
                alt="gallery"
                className="block h-full w-full  object-cover object-center"
                src={galleryimage3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
