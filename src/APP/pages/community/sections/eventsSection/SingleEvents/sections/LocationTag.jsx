import React from "react";

function LocationTag({ isVirtual }) {
  return (
    <div className="border cursor-pointer rounded-full bg-white p-1 w-fit">
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8175_11232)">
            <path
              d="M8 0.611328C12.3294 0.611328 16 4.1962 16 8.54534C16 12.9637 12.2696 16.0644 8.824 18.1728C8.57289 18.3146 8.28893 18.3891 8 18.3891C7.71107 18.3891 7.42711 18.3146 7.176 18.1728C3.7368 16.0438 0 12.979 0 8.54534C0 4.1962 3.67061 0.611328 8 0.611328Z"
              fill="#1F7964"
            />
            <path
              d="M11.1109 8.61111C11.1109 10.3293 9.718 11.7222 7.99978 11.7222C6.28156 11.7222 4.88867 10.3293 4.88867 8.61111C4.88867 6.89289 6.28156 5.5 7.99978 5.5C9.718 5.5 11.1109 6.89289 11.1109 8.61111Z"
              fill="white"
              stroke="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_8175_11232">
              <rect
                width="16"
                height="17.7778"
                fill="white"
                transform="translate(0 0.611328)"
              />
            </clipPath>
          </defs>
        </svg>

        <span className="capitalize text-green-header text-sm font-semibold">
          {isVirtual ? "Virtual" : "On-Site"}
        </span>
      </div>
    </div>
  );
}

export default LocationTag;
