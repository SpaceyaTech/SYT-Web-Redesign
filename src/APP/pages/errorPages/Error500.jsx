import React from "react";
import { bgError500, error500svg } from "../../../assets/images/errorPages";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Error500() {
  return (
    <section className="max-w-[1440px] mx-auto flex-center flex-col gap-3 pb-8">
      <div className="relative flex-center flex-col pt-8 w-full">
        <LazyLoadImage
          src={bgError500}
          alt="bgError500"
          className="object-cover w-full h-full"
        />

        <div className="flex flex-row items-end absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <LazyLoadImage
            src={error500svg}
            alt="error-500"
            className="lg:flex hidden object-contain w-full h-[720px]"
          />

          <div className="hidden lg:flex justify-center text-left flex-col gap-3 p-4 mb-16">
            <h3 className="text-3xl font-semibold ">
              Sorry... <br />
              It’s not you. <br />
              It’s us.
            </h3>

            <p className="text-xl font-normal mb-2">
              We’re experiencing an internal server problem. Please try again
              after a few minutes or{" "}
              <a href="/" className="text-primary hover:underline">
                contact us.
              </a>
            </p>

            <a
              href="/"
              className="bg-[#00664E] rounded-lg text-white w-max py-2 px-10"
            >
              Go Home
            </a>

          </div>
        </div>

        <LazyLoadImage
          src={error500svg}
          alt="error-500"
          className="flex lg:hidden object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4"
        />
      </div>

      <div className="flex items-center justify-center lg:hidden text-center flex-col gap-3 p-4">
        <h3 className="text-2xl font-semibold ">
          Sorry... <br />
          It’s not you. It’s us.
        </h3>

        <p className="text-base font-normal mb-2 max-w-lg ">
          We’re experiencing an internal server problem. Please try again after
          a few minutes or{" "}
          <a href="/" className="text-primary hover:underline">
            contact us.
          </a>
        </p>

        <a
          href="/"
          className="bg-primary text-base rounded-lg text-white w-max py-2 px-10"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}

export default Error500;
