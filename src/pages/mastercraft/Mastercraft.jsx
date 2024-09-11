import React from "react";
import { Description, Header, Portfolio } from "./sections";

function Mastercraft() {
  return (
    <div className="bg-[#F5F5F5]">
      <main className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5 border border-red-500">
        <Header />
        <Description />
        <Portfolio />
      </main>
    </div>
  );
}

export default Mastercraft;
