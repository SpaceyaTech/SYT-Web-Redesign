import React from "react";
import Advert from "./Advert";
import { glovo } from "../../../../assets/images/blogs-page";

function BlogBody() {
  return (
    <div className="flex flex-row gap-5 w-full pb-8">
      <div className="w-[70%] flex flex-col gap-5">
        {/* <div className="container text-[13px] md:text-base font-normal text-[#323433]"> */}
        {/* <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            /> */}
        <p className="first-letter">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>
        <p className="">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>
        <p className="">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>

        <Advert />

        <p className="">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>
        <p className="">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>
        <p className="">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students. As technology continues to advance at an unprecedented
          pace, virtual reality (VR) is emerging as a powerful tool with the
          potential to transform traditional educational approaches. Virtual
          reality offers a unique opportunity to create realistic and
          interactive learning experiences that go beyond the confines of
          traditional classrooms. By simulating immersive environments and
          scenarios, students can explore historical events, travel to distant
          places, or even delve into complex scientific concepts with
          unparalleled depth and interactivity.
        </p>
        {/* </div> */}
      </div>

      <div className="w-[30%] border mt-16">
        <div className="">Related Articles</div>

        <div className="">
          <img src={glovo} alt="glovo" />
        </div>
      </div>
    </div>
  );
}

export default BlogBody;
