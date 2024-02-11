import { courses } from "../../../../assets/images/resources-page";

const Sidebar = ({ level, isActive, onClick }) => {
  return (
    <button
      className={`border-[1px] rounded-xl flex flex-col items-center py-5 px-3 ${
        isActive && "border-[1px] border-purple-600"
      }`}
      onClick={onClick}
    >
      <img className="w-6" src={courses} alt={level} />
      <span className="mt-2 text-xs">{level}</span>
    </button>
  );
};

export default Sidebar;
