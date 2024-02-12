import { courses } from "../../../../assets/images/resources-page";

const Sidebar = ({ level, isActive, onClick }) => {
  return (
    <button
      className={`border-[1px] rounded-xl hidden md:flex flex-col items-center justify-center mt-4 w-[100px] h-[100px] ${
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
