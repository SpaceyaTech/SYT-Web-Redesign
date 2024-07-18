import React from "react";

import { error400 } from "../../assets/images/errorPages";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Error400() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center gap-0 pb-10 md:pb-8">
      <LazyLoadImage
        src={error400}
        alt="Error400"
        className="p-4 mt-5 md:my-10 sm:px-12 sm:my-0 h-[400px] md:h-[540px] object-contain w-full sm:w-fit"
      />

      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center max-w-lg">
        <p className="px-6 text-base sm:text-lg font-normal">
          There was a problem with your request. If you continue to see this
          error, please{" "}
          <a href="/" className="text-primary hover:underline">
            contact us.
          </a>
          .
        </p>

        <a
          href="/"
          className="bg-primary text-base rounded-lg text-white w-max py-2 px-10 mt-4"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}

export default Error400;
