import React, { useState } from "react";

export default function RangeInput() {
  const [value, setValue] = useState(50);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const calculateBackground = () =>
    `linear-gradient(to right, #009975 0%, #009975 ${value}%, gray ${value}%, gray 100%)`;

  const tooltipPosition = {
    left: `${(value / 100) * 100}%`,
  };
  return (
    <form className="my-2">
      <div className="relative">
        <input
          id="medium-range"
          type="range"
          value={value}
          min={0}
          max={100}
          onChange={handleInputChange}
          style={{
            background: calculateBackground(),
            height: "6px",
            borderRadius: "5px",
          }}
          className="w-full appearance-none cursor-pointer"
        />
        <label
          htmlFor="medium-range"
          className="absolute -top-3 transform -translate-x-1/2 text-xs font-medium text-primary"
          style={tooltipPosition}
        >
          {value}%
        </label>
      </div>
      <div className="text-right text-sm text-[#0061CC]">KES 250,000</div>
    </form>
  );
}
