import React from "react";
import DropdownInput from "./DropdownInput";

function Organizers() {
  return (
    <div className=" w-3/4 mt-4  items-center">
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Organizers
      </p>
      <form>
        <DropdownInput marginTop="4" />
        <DropdownInput marginTop="4" />
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Chapter name"
          />
        </div>
        <div className="w-full mt-4">
          <input
            id="username"
            className="w-full h-20 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="About Chapter"
          />
        </div>
      </form>
    </div>
  );
}

export default Organizers;
