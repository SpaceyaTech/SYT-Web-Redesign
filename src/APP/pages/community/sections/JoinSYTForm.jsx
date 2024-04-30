import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { sytLogoGreen } from "../../../../assets/images/icons";

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
    } catch (error) {
      setErr(error.response.data.detail);
      setLoading(true);
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

          <label
            htmlFor="work"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            What would best describe your work?
            <select
              name="work"
              id="work"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm"
            >
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Blockchain">Blockchain</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Database Management">Database Management</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Natural Language Processing">
                Natural Language Processing
              </option>
              <option value="Neural Networks">Neural Networks</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="System Administration">
                System Administration
              </option>
              <option value="Robotics">Robotics</option>
              <option value="Augmented Reality">Augmented Reality</option>
              <option value="Virtual Reality">Virtual Reality</option>
              <option value="Game Development">Game Development</option>
              <option value="Internet of Things">
                Internet of Things(IoT)
              </option>
              <option value="Graphic Design">Graphic Design</option>

              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Networking">Networking</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="DevOps">DevOps</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Embedded Systems">Embedded Systems</option>
              <option value="Big Data">Big Data</option>
            </select>
          </label>

          <label
            htmlFor="field_of_interest"
            className="text-sm font-medium flex flex-col gap-1.5"
          >
            What would best describe your interest?
            <select
              name="field_of_interest"
              id="field_of_interest"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm"
            >
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Blockchain">Blockchain</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Database Management">Database Management</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Natural Language Processing">
                Natural Language Processing
              </option>
              <option value="Neural Networks">Neural Networks</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="System Administration">
                System Administration
              </option>
              <option value="Robotics">Robotics</option>
              <option value="Augmented Reality">Augmented Reality</option>
              <option value="Virtual Reality">Virtual Reality</option>
              <option value="Game Development">Game Development</option>
              <option value="Internet of Things">
                Internet of Things(IoT)
              </option>
              <option value="Graphic Design">Graphic Design</option>

              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Networking">Networking</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="DevOps">DevOps</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Embedded Systems">Embedded Systems</option>
              <option value="Big Data">Big Data</option>
            </select>
          </label>

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
