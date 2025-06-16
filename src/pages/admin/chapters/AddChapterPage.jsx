import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddChapterForm from "../../../components/admin/AddChapterForm";
import StepIndicator from "../../../components/admin/StepIndicator";
import usePostAddChapter from "../../../hooks/Queries/chapter/usePostAddChapter";

function AddChapterPage() {
  const {
    setChapterData: postChapter,
    error: errorPostChapter,
    clearError: clearErrorPostChapter,
    status: statusPostChapter,
    clearStatus: clearStatusPostChapter,
  } = usePostAddChapter();

  const [collectedChapter, setCollectedChapter] = useState(null);

  const initialSteps = [
    { section: "01", title: "GENERAL INFO", status: "active" },
    { section: "02", title: "SOCIAL MEDIA LINKS", status: "inactive" },
    { section: "03", title: "ORGANIZERS", status: "inactive" },
  ];

  const [steps, setSteps] = useState(initialSteps);

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      const updatedSteps = [...steps];
      updatedSteps[currentStep].status = "completed";
      updatedSteps[currentStep + 1].status = "active";
      setSteps(updatedSteps);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const updatedSteps = [...steps];
      updatedSteps[currentStep].status = "inactive";
      updatedSteps[currentStep - 1].status = "inactive";
      setSteps(updatedSteps);
      setCurrentStep(currentStep - 1);
    }
  };

  const formComplete = (completeChapterData) => {
    // eslint-disable-next-line no-unused-expressions
    statusPostChapter === "error" && clearStatusPostChapter();
    // eslint-disable-next-line no-unused-expressions
    errorPostChapter && clearErrorPostChapter();
    postChapter({ ...completeChapterData });
  };

  useEffect(() => {
    if (statusPostChapter === "success") {
      setSteps(initialSteps);
      setCurrentStep(0);
      setCollectedChapter(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusPostChapter]);

  return (
    <div className="mx-auto flex px-11 flex-col">
      <button
        className="flex cursor-pointer gap-x-2  mt-8 items-center"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.68281 10.4425L8.30781 16.0675C8.42509 16.1848 8.58415 16.2507 8.75 16.2507C8.91585 16.2507 9.07491 16.1848 9.19219 16.0675C9.30946 15.9503 9.37535 15.7912 9.37535 15.6253C9.37535 15.4595 9.30946 15.3004 9.19219 15.1832L4.63359 10.6253H16.875C17.0408 10.6253 17.1997 10.5595 17.3169 10.4423C17.4342 10.3251 17.5 10.1661 17.5 10.0003C17.5 9.83459 17.4342 9.67562 17.3169 9.55841C17.1997 9.4412 17.0408 9.37535 16.875 9.37535H4.63359L9.19219 4.81753C9.30946 4.70026 9.37535 4.5412 9.37535 4.37535C9.37535 4.2095 9.30946 4.05044 9.19219 3.93316C9.07491 3.81588 8.91585 3.75 8.75 3.75C8.58415 3.75 8.42509 3.81588 8.30781 3.93316L2.68281 9.55816C2.6247 9.61621 2.5786 9.68514 2.54715 9.76101C2.5157 9.83688 2.49951 9.91821 2.49951 10.0003C2.49951 10.0825 2.5157 10.1638 2.54715 10.2397C2.5786 10.3156 2.6247 10.3845 2.68281 10.4425Z"
            fill="#323433"
          />
        </svg>

        <p className="text-sm font-medium">BACK</p>
      </button>

      <div className="mt-10 gap-y-2 flex flex-col">
        <p className="text-base text-[#656767] tracking-wider font-medium">
          Chapters
        </p>
        <p className="tracking-wider text-2xl font-normal text-[#323433]">
          New Chapter
        </p>
        {/* Success Display */}
        {statusPostChapter === "success" && (
          <div
            className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Chapter Added Successfully!</strong>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                clearStatusPostChapter();
                postChapter(null);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  clearStatusPostChapter();
                  postChapter(null);
                }
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        {/* Errors Display */}
        {statusPostChapter === "error" && errorPostChapter?.axios && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Cannot add the chapter: </strong>
            <span className="block sm:inline">{errorPostChapter.axios}</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                clearErrorPostChapter();
                clearStatusPostChapter();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  clearErrorPostChapter();
                  clearStatusPostChapter();
                }
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        {statusPostChapter === "error" && errorPostChapter?.chapter && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Cannot add the chapter: </strong>
            <ul style={{ listStyle: "disc", padding: "revert" }}>
              {Object.keys(errorPostChapter.chapter).map((key) => (
                <li key={key}>
                  <strong className="font-bold">{key}: </strong>{" "}
                  {errorPostChapter.chapter[key].toString()}
                </li>
              ))}
            </ul>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                clearErrorPostChapter();
                clearStatusPostChapter();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  clearErrorPostChapter();
                  clearStatusPostChapter();
                }
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        <p className="text-base text-[#656767] tracking-wider font-medium">
          Add Chapter Details
        </p>
      </div>
      <div className="rounded-lg mt-8 border flex flex-col justify-center items-center  border-gray-300">
        <StepIndicator steps={steps} currentStep={currentStep} />
        <AddChapterForm
          currentStep={currentStep}
          theNext={handleNextStep}
          thePrevious={handlePreviousStep}
          collectedChapter={collectedChapter}
          setCollectedChapter={setCollectedChapter}
          formComplete={formComplete}
        />
      </div>
    </div>
  );
}

export default AddChapterPage;
