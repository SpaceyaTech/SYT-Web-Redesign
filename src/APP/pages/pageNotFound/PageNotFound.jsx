import React from "react";

import pageNotFound from "../../../assets/images/pageNotFound.svg";

function PageNotFound() {
  return (
    <section className="max-w-[1440px] mx-auto border flex flex-col items-center gap-8">
      <img
        src={pageNotFound}
        alt="pageNotFound"
        className="h-full p-4 sm:h-[400px] object-cover w-full sm:w-fit border"
      />
      <div className="">ase</div>
    </section>
  );
}

export default PageNotFound;
