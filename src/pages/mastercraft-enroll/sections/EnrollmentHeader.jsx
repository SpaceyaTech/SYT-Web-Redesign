function EnrollmentHeader() {
  return (
    <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
      <h4 className="text-lg font-normal text-[#2E2E2E]">
        I&apos;m enrolling for the Mastercraft program, in{" "}
        <span className="font-semibold">Product Design</span>
      </h4>

      <div className="bg-[#2A67583D] rounded-full border-2 border-white p-2.5 flex-center">
        <p className="text-sm text-[#2E2E2E] font-extrabold">
          121 <span className="font-normal">have already enrolled</span>
        </p>
      </div>
    </div>
  );
}

export default EnrollmentHeader;
