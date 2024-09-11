/* eslint-disable react/prop-types */
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { PiOfficeChair } from "react-icons/pi";
import { TbArrowsHorizontal } from "react-icons/tb";

function NextCohortSlot({ slots }) {
  return (
    <div className="bg-white p-3 md:p-5 rounded-xl border flex flex-col gap-2.5 md:gap-4">
      <div className="max-w-fit px-4 py-1.5 text-primary bg-[#ECFDF3] rounded-2xl flex items-center gap-2 text-xs leading-normal font-medium capitalize">
        <div className="bg-primary size-2 rounded-full" /> Advanced Masterclass
      </div>

      <div className="flex md:items-center justify-between gap-2 flex-col md:flex-row">
        <div className="space-y-2">
          <h4 className="text-base font-semibold text-green-header">
            UX Design for Fintech
          </h4>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 text-grey-darker text-sm font-medium">
              <IoLocationOutline size={18} />
              <span>Mentorlst</span>
            </div>

            <div className="bg-gray-400 w-0.5 h-4" />

            <div className="flex items-center gap-1 text-grey-darker text-sm font-medium">
              <FiCalendar size={18} />
              <span>Oct 1, 2024</span>
            </div>

            <div className="bg-gray-400 w-0.5 h-4" />

            <div className="flex items-center gap-1 text-grey-darker text-sm font-medium">
              <TbArrowsHorizontal size={18} />
              <span>12 Weeks</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex items-center gap-1 text-xs">
            <PiOfficeChair size={18} className="text-grey-neutral" />
            <span
              className={`${slots >= 10 ? "text-primary" : "text-error-text"}`}
            >
              {slots}/40 seats left
            </span>
          </div>

          <button
            type="button"
            className="text-green-header border border-green-header rounded bg-transparent px-6 py-1 text-sm transition-all ease-in duration-500 hover:bg-green-header hover:text-white"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default NextCohortSlot;
