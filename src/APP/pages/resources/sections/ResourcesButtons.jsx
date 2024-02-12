import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

const ResourcesButtons = ({ category, isActive, onClick }) => {
  return (
    <>
      <div className="text-[12px]" onClick={onClick}>
        <button
          className={`bg-slate-100 cursor-pointer text-nowrap rounded-full px-4 py-2 ${
            isActive && "bg-primary text-white"
          }`}
        >
          {category}
        </button>
      </div>
    </>
  );
};

export default ResourcesButtons;
