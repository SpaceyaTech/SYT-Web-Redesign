import React from "react";
import { Description, Header } from "./sections";

function Mastercraft() {
  return (
    <div className="bg-[#F5F5F5]">
      <main className="py-16 flex items-center flex-col md:gap-10 max-w-1440 mx-auto md:px-8 px-5 border border-red-500">
        <Header />
        <Description />
      </main>
    </div>
  );
}

export default Mastercraft;
