import PropTypes from "prop-types";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { sytLogoGreen } from "../../../../assets/images/icons";
import { fieldsOfInterest } from ".";

function JoinSYTForm({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Data: ", data);

    closeModal();
  };

  console.log("Data", fieldsOfInterest);
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center  md:justify-start p-5 gap-8 md:p-12">
      <LazyLoadImage
        src={sytLogoGreen}
        alt="logo"
        className="size-24 object-contain flex md:hidden"
      />
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-2xl font-semibold">Join the Community</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label
            htmlFor="name"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            Full name
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              id="name"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </label>

          <label
            htmlFor="email"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            Email address
            <input
              type="email"
              placeholder="john.doe@example.com"
              id="email"
              name="email"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </label>

          <label
            htmlFor="work"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            What would best describe your work?
            {/* <textarea
              type="text"
              placeholder="What would best describe your work?"
              id="work"
              name="work"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            /> */}
            <select
              name="work"
              id="work"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm"
            >
              {fieldsOfInterest.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}

              <option value="option">option</option>
              <option value="option">option</option>
              <option value="option">option</option>
            </select>
          </label>

          <label
            htmlFor="interest"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            What would best describe your interest?
            <textarea
              type="text"
              placeholder="What would best describe your interest?"
              id="interest"
              name="interest"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </label>

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

JoinSYTForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
