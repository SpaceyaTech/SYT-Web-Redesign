import { useState } from "react";

// import Banner from "./sections/Banner";
import BlogsWrapper from "./sections/BlogsWrapper";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <section className="flex flex-col items-center gap-4 max-w-[1440px] mx-auto">
      {/* <Banner searchText={searchText} setSearchText={setSearchText} /> */}
      <BlogsWrapper searchText={searchText} />
    </section>
  );
};

export default Blogs;
