import { Palette } from "lucide-react";

function CourseInfoCard() {
  return (
    <div className="bg-[#F8F8F8] md:bg-transparent rounded-lg w-full flex flex-col md:flex-row gap-3 items-center justify-between py-2 md:py-0">
      <div className="md:w-3/5 flex items-center gap-2 md:gap-4">
        <div className="size-14 md:size-16 border-2 border-white rounded-md flex-center p-2 md:p-2.5 bg-[#E9F4F1]">
          <Palette color="green" size={32} aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-2 items-start font-inter">
          <h5 className="text-sm text-black font-medium">UI/UX Designer</h5>
          <p className="text-xs text-[#686868] font-normal">
            Mastercraft Internship ● 8 weeks
          </p>
        </div>
      </div>

      <div className="md:py-5 md:px-8">
        <h4 className="text-green-dark font-semibold text-base font-inter">
          <span className="text-xs">KES</span>{" "}
          {new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(2800)}
        </h4>
      </div>
    </div>
  );
}

export default CourseInfoCard;
