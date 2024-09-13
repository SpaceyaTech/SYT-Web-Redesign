import React from "react";
import SeoMetadata from "../../components/SeoMetadata";
import { Description, Header, Portfolio } from "./sections";

function Mastercraft() {
  return (
    <>
      <SeoMetadata
        title="Mastercraft"
        description="SpaceYaTech is the fastest growing Africa, open-source community looking to change the way young Africans get started in technology."
        type="website"
        url="https://www.spaceyatech.com/"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <div className="bg-[#F5F5F5]">
        <main className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5">
          <Header />
          <Description />
          <Portfolio />
        </main>
      </div>
    </>
  );
}

export default Mastercraft;
