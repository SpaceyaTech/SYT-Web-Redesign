/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { facebook, linkedin, twitter } from "../../../assets/images/socials";
import logo from "../../../assets/images/sytLogo.png";

function PasswordResetRequest() {
  return (
    <main className="bg-[#F4FFFC] md:py-4">
      <section className="bg-white max-w-[640px] md:rounded-2xl md:shadow-inner mx-auto flex items-center flex-col gap-8 px-4 md:px-0 py-6 md:py-12">
        <img src={logo} alt="logo" className="h-16 w-16 object-contain" />

        <div className="flex flex-col items-start gap-6 max-w-xl md:mb-6">
          <h2 className="text-xl md:text-3xl font-medium">
            Your SpaceYaTech password has changed
          </h2>
          <p className="text-[#263238] text-sm leading-6 md:text-base font-normal">
            Hello Hudson Obai,
            <br />
            <br />
            Your SpaceYaTech password was changed successfully.
            <br />
            If you didn&apos;t request this password change{" "}
            <a
              href="mailto:info@spaceyatech,com"
              className="underline uppercase text-primary font-semibold"
            >
              CONTACT US
            </a>
          </p>

          <span className="text-base font-medium">Mentorlst Team</span>
        </div>

        <div className="h-4 bg-[#F4FFFC] w-full" />

        <div className="flex items-center justify-between w-full max-w-xl">
          <img
            src={logo}
            alt="logo"
            className="h-12 md:h-16 w-12 md:w-16 object-cover"
          />

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

export default PasswordResetRequest;
