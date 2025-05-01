function EnrollmentProgressBar({ currentStep }) {
  return (
    <div className="flex items-center justify-between w-full gap-5 mt-5">
      <div className="w-1/3 bg-primary h-1 rounded-sm" />
      <div
        className={`w-1/3 h-1 rounded-sm ${currentStep > 1 ? "bg-primary" : "bg-[#BAC6C3]"}`}
      />
      <div
        className={`w-1/3 h-1 rounded-sm ${currentStep > 2 ? "bg-primary" : "bg-[#BAC6C3]"}`}
      />
    </div>
  );
}

export default EnrollmentProgressBar;
