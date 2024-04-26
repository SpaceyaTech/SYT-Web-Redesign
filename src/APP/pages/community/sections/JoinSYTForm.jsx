import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sytLogoGreen } from "../../../../assets/images/icons";
import { GoBackBtn } from "../../../components";

function JoinSYTForm({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Data: ", data);

    // closeModal();
  };
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center  md:justify-start p-5 gap-8 md:p-12">
      <LazyLoadImage
        src={sytLogoGreen}
        alt="logo"
        className="size-24 object-contain flex md:hidden"
      />
      <div className="flex flex-col w-full gap-8">
        <GoBackBtn />

        <h2 className="text-2xl font-semibold">Join the Community</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              name="name"
              id="name"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>

            <input
              type="email"
              placeholder="john.doe@example.com"
              id="email"
              name="email"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="work" className="text-sm font-medium">
              What would best describe your work?
            </label>

            <textarea
              type="text"
              placeholder="What would best describe your work?"
              id="work"
              name="work"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="interest" className="text-sm font-medium">
              What would best describe your interest?
            </label>

            <textarea
              type="text"
              placeholder="What would best describe your interest?"
              id="interest"
              name="interest"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <button
            type="submit"
            className="text-white bg-gradient-to-b to-primary from-green-dark p-2.5 rounded-md md:mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinSYTForm;
