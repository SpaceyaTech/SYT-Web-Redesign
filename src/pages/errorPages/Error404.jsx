import React from "react";
import { useNavigate } from "react-router-dom";

import { error404 } from "../../assets/images/errorPages";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Error404() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center gap-0 pb-10 md:pb-8">
      <LazyLoadImage 
        src={error404}
        alt="Error404"
        className="p-4 mt-5 md:my-10 sm:px-12 sm:my-0 h-[400px] md:h-[540px] object-contain w-full sm:w-fit"
      />

      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center max-w-lg">
        <h3 className="text-[#006643] capitalize text-2xl sm:text-3xl font-medium">
          page not found
        </h3>

        <p className="px-6 text-base sm:text-lg font-normal">
          Either your internet is misbehaving or we couldn’t find the file you
          are trying to access.
        </p>

        <button
          className="max-w-[200px] bg-[#006643] rounded-lg text-white py-2 px-8 mt-2 text-base"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Take Me Back
        </button>
      </div>
    </section>
  );
}

export default Error404;
