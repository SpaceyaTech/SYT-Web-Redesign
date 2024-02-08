import { courses } from "../../../../assets/images/resources-page";

const Sidebar = () => {
  return (
    <div className="lg:flex flex-col hidden gap-4">
      <div className="border-[1px] rounded-xl flex flex-col items-center py-5 px-3">
        <img className="w-6" src={courses} alt="Courses" />
        <p className="mt-2 text-xs">Beginner</p>
      </div>
      <div className="border-[1px] rounded-xl flex flex-col items-center py-5 px-3">
        <img className="w-6" src={courses} alt="Courses" />
        <p className="mt-2 text-xs">Intermediate</p>
      </div>
      <div className="border-[1px] rounded-xl flex flex-col items-center py-5 px-3">
        <img className="w-6" src={courses} alt="Courses" />
        <p className="mt-2 text-xs">Advanced</p>
      </div>
    </div>
  );
};

export default Sidebar;
