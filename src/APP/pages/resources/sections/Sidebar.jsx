import { courses } from "../../../../assets/images/resources-page";

const Sidebar = ({ level, isActive }) => {
  return (
    <div
      className={`border-[1px] rounded-xl flex flex-col items-center py-5 px-3 ${
        isActive && "border-[1px] border-purple-600"
      }`}
    >
      <img className="w-6" src={courses} alt="Courses" />
      <p className="mt-2 text-xs">{level}</p>
    </div>
  );
};

export default Sidebar;
