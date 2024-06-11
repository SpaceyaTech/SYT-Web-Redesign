import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { sytLogoGreen } from "../../../../assets/images/icons";
import JoinSytSelectFields from "./JoinSYTSelectFields";
function JoinSYTForm({ closeModal }) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const work = formData.get("work");
    const fieldOfInterest = formData.get("field_of_interest");

    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/members/`;

      await axios.post(url, {
        fullname,
        email,
        work,
        field_of_interest: fieldOfInterest,
      });

      setLoading(false);
      closeModal();
      window.location.href = "https://discord.com/invite/xSH9eAgBJm";
    } catch (error) {
      setErr(error.response.data.detail);
      setLoading(true);
      toast.error("Please try again!");
    }
  };

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
            htmlFor="fullname"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            Full name
            <input
              type="text"
              placeholder="John Doe"
              name="fullname"
              id="fullname"
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

          <JoinSytSelectFields />

          <button
            type="submit"
            className="text-white bg-gradient-to-b to-primary from-green-dark p-2.5 rounded-md md:mt-3"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {err && (
            <p className="text-center text-red-500 italic font-normal">{err}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default JoinSYTForm;

JoinSYTForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
