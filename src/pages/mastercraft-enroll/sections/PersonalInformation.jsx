/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";
import PhoneInput from "react-phone-number-input";

function PersonalInformation({ formData, handleInputChange }) {
  return (
    <div className="flex flex-col gap-6 xl:gap-6">
      <h5 className="text-lg font-medium">Personal Information</h5>

      <form className="bg-[#FBFCFE] rounded-3xl p-4 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="fullName" className="text-sm">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            value={formData.fullName}
            placeholder="ex: John Doe"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={formData.email}
            placeholder="ex: john.doe@example.com"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phoneNumber" className="text-sm">
            Phone number
          </label>
          <PhoneInput
            defaultCountry="KE"
            withCountryCallingCode
            international
            onChange={(value) => handleInputChange("phoneNumber", value)}
            value={formData.phoneNumber}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="254712345678"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="github" className="text-sm">
            Github link
          </label>
          <input
            type="url"
            name="github"
            id="github"
            onChange={(e) => handleInputChange("github", e.target.value)}
            value={formData.github}
            placeholder="ex: https://github.com/johndoe"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="project" className="text-sm">
            Project link
          </label>
          <input
            type="url"
            name="project"
            id="project"
            onChange={(e) => handleInputChange("project", e.target.value)}
            value={formData.project}
            placeholder="ex: https://github.com"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="github" className="text-sm">
            LinkedIn or X url
          </label>
          <input
            type="url"
            name="linkedIn"
            id="linkedIn"
            onChange={(e) => handleInputChange("linkedIn", e.target.value)}
            value={formData.linkedIn}
            placeholder="ex: https://linkedin.com/johndoe"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;
