/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";

import { search } from "../../../../assets/images/resources-page";

function ResourcesSection2() {
  return (
    <div className="flex border flex-col gap-12">
      <div className="flex flex-row items-center justify-center">
        <input type="text" placeholder="Search resources" />
        <img src={search} alt="" />
      </div>

      <div className="grid sm:grid-cols-4  gap-16 grid-cols-1">
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
        <div className="">Resources</div>
      </div>
    </div>
  );
}

export default ResourcesSection2;
