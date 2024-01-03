import React from "react";

function Banner() {
  return (
    <section className="bg-[url(https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-60 md:h-80 flex items-center justify-center">
      <div className="max-w-xl flex flex-col items-center gap-5 mx-4">
        <h1 className="text-lg md:text-3xl text-center text-white font-medium">
          Elevate your style with our exclusive collection of merchandise
        </h1>

        <a
          href="#popularItemsSection"
          className="bg-white w-full max-w-xs rounded p-2 capitalize flex items-center justify-center hover:bg-[#009975] hover:text-white transition-all ease-in duration-300"
        >
          Shop now
        </a>
      </div>
    </section>
  );
}

export default Banner;
