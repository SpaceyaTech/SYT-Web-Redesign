import React from "react";

import { wave } from "../../../assets/images/emails";
import { facebook, twitter, linkedin } from "../../../assets/images/socials";
import logo from "../../../assets/images/sytLogo.png";

function Welcome() {
  return (
    <main className="bg-[#F4FFFC] p-20">
      <section className="bg-white max-w-[640px] rounded-2xl shadow-inner mx-auto flex items-center flex-col gap-8 px-2 md:px-0 py-12">
        <img src={logo} alt="logo" className="h-16 w-16 object-contain" />

        <img src={wave} alt="wave" className="w-40 h-40 object-cover" />
        <div className="flex flex-col items-start gap-6 max-w-xl mb-6">
          <h2 className="text-3xl font-medium">Welcome to the community!</h2>
          <p className="text-base font-normal">
            You’re in safe hands.
            <br />
            <br />
            Join our friendly community, where you can learn, grow, and even
            give back by mentoring others. Let&apos;s build a supportive tech
            family together!
            <br />
            <br />
            Seize the moment, for even the smallest opening can lead to great
            possibilities. We are rooting for you.
          </p>

          <button
            type="button"
            className="mx-auto mt-6 px-11 py-4 w-fit text-white text-base bg-[#009975] rounded-xl"
          >
            Join Community
          </button>
        </div>

        <div className="flex items-center justify-between w-full max-w-xl">
          <img src={logo} alt="logo" className="h-16 w-16 object-cover" />

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/SpaceYaTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="twitter"
                className="h-8 w-8 object-cover"
              />
            </a>
            <a
              href="https://www.facebook.com/spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook"
                className="h-8 w-8 object-cover"
              />
            </a>
            <a
              href="https://linkedin.com/company/spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedIn"
                className="h-8 w-8 object-cover"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Welcome;
