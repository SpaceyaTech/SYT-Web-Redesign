const blogCat = [
  {
    id: 1,
    cat: "Software Development",
  },
  {
    id: 2,
    cat: "Design",
  },
  {
    id: 3,
    cat: "Mobile Development",
  },
  {
    id: 4,
    cat: "UX Design",
  },
  {
    id: 5,
    cat: "UI Design",
  },
  {
    id: 6,
    cat: "Technical Writing",
  },
];

const BlogsWrapper = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16 px-4 xl:px-14">
      <div className="w-max overflow-scroll md:overflow-auto flex flex-row items-center gap-3">
        {blogCat.map((blog) => (
          <span
            key={blog.id}
            className="bg-gray-100 text-black text-sm py-1 px-3 rounded-2xl cursor-pointer transition-all duration-500 ease-in hover:bg-[#009975] hover:text-white active:bg-[#009975] active:text-white w-fit whitespace-normal"
          >
            {blog.cat}
          </span>
        ))}
      </div>
      <div className="">Blogs items</div>
    </div>
  );
};

export default BlogsWrapper;
