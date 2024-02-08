import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

const ResourcesButtons = ({ category, isActive, onClick }) => {
  console.log(category);
  return (
    <>
      <div className="flex justify-center sm:text-sm gap-2 sm:flex flex-wrap items-center">
        <button className="bg-slate-100 cursor-pointer text-nowrap rounded-full px-4 py-1">
          Category
        </button>
      </div>
    </>
  );
};

export default ResourcesButtons;
