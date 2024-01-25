import React, { useState } from "react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function DropdownInput({ marginTop }) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`w-full mt-${marginTop}`}>
      <select
        id="dropdown"
        className="w-full px-8 py-2 h-12 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="" disabled selected>
          Select your option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
DropdownInput.propTypes = {
  marginTop: "",
};

DropdownInput.defaultProps = {
  marginTop: "",
};

export default DropdownInput;
