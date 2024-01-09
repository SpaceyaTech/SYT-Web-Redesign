import React from "react";
import { Link } from "react-router-dom";

import { bgError500, error500 } from "../../../assets/images/errorPage";

function Error500() {
  return (
    <section className="max-w-[1440px] mx-auto flex-center flex-col gap-3 pb-8">
      <div className="relative flex-center flex-col pt-8 w-full">
        <img
          src={bgError500}
          alt="bgError500"
          className="object-cover w-full h-full"
        />
        <img
          src={error500}
          alt="error-500"
          className=" absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4"
        />
      </div>

      <div className="flex-center text-center flex-col gap-3 p-4">
        <h3 className="text-2xl md:text-3xl font-semibold ">
          Sorry... <br />
          It’s not you. It’s us.
        </h3>

        <p className="text-base md:text-xl font-normal mb-2">
          We’re experiencing an internal server problem. Please try again after
          a few minutes or{" "}
          <Link to="/" className="text-primary hover:underline">
            contact us.
          </Link>
        </p>

        <Link
          to="/"
          className="bg-[#00664E] rounded-lg text-white w-max py-2 px-10"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}

export default Error500;
