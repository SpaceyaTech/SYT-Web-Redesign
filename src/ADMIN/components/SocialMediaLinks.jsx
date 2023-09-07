import React from "react";

function SocialMediaLinks() {
  return (
    <div className=" w-3/4 mt-4  items-center">
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Social Media Links
      </p>
      <form>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Facebook"
          />
        </div>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Twitter"
          />
        </div>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Linkedin"
          />
        </div>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Instagram"
          />
        </div>
      </form>
    </div>
  );
}

export default SocialMediaLinks;
