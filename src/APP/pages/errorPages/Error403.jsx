import React from "react";
import { Link } from "react-router-dom";

import { error403 } from "../../../assets/images/errorPages";

function Error403() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 md:gap-0 pb-10 md:pb-8">
      <img
        src={error403}
        alt="Error403"
        className="px-4 mt-5 md:my-10 sm:px-12 sm:my-0 h-[400px] md:h-[540px] w-full sm:w-fit"
      />

      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center max-w-lg">
        <p className="px-6 text-base sm:text-lg font-normal">
          You don’t have permission to view this resource. If you believe there
          has been a mistake, please{" "}
          <Link to="/" className="text-primary hover:underline">
            contact us.
          </Link>
          .
        </p>

        <Link
          to="/"
          className="bg-primary text-base rounded-lg text-white w-max py-2 px-10 mt-4"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default Error403;
