/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import PhoneInput from "react-phone-number-input";

function PersonalInformation({ formData, handleInputChange }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-[#2E2E2E]">
        Personal Information
      </h3>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="text-sm text-[#2E2E2E] font-medium"
        >
          Full Name*
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-[#2E2E2E] font-medium">
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="phoneNumber"
          className="text-sm text-[#2E2E2E] font-medium"
        >
          Phone Number*
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

      <div className="flex flex-col gap-2">
        <label htmlFor="github" className="text-sm text-[#2E2E2E] font-medium">
          GitHub Profile
        </label>
        <input
          type="url"
          id="github"
          name="github"
          value={formData.github}
          onChange={(e) => handleInputChange("github", e.target.value)}
          className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          placeholder="Enter your GitHub profile URL"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="project" className="text-sm text-[#2E2E2E] font-medium">
          Project Link
        </label>
        <input
          type="url"
          id="project"
          name="project"
          value={formData.project}
          onChange={(e) => handleInputChange("project", e.target.value)}
          className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          placeholder="Enter project link"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="linkedIn"
          className="text-sm text-[#2E2E2E] font-medium"
        >
          LinkedIn Profile
        </label>
        <input
          type="url"
          id="linkedIn"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={(e) => handleInputChange("linkedIn", e.target.value)}
          className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          placeholder="Enter your LinkedIn profile URL"
        />
      </div>
    </div>
  );
}
export default PersonalInformation;
