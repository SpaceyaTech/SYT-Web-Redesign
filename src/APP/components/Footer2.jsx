import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sytLogo.png";
// import backup from "../../assets/images/backup.svg";
import {
  linkedin,
  twitter,
  spotify,
  youtube,
} from "../../assets/images/socials";

function Footer2() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-[#252533] text-white md:p-12 py-8 px-4 relative">
      <div className="flex md:flex-row flex-col md:gap-16 gap-8 ">
        <div className="flex-3 flex flex-col md:items-center items-start">
          {/* logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[124px] h-32 md:ml-0 ml-4 object-contain"
          />

          {/* socials */}
          <div className="flex items-center md:gap-5 gap-3 py-4">
            <a
              href="https://x.com/SpaceYaTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" className="w-7 h-7" />
            </a>

            <a
              href="https://linkedin.com/company/spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="w-7 h-7" />
            </a>

            <a
              href="https://www.youtube.com/@spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube" className="w-7 h-7" />
            </a>

            <a
              href="https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={spotify} alt="spotify" className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex-3 flex gap-6 justify-between">
          <div className="flex flex-col gap-8">
            <h2 className="text-[#00FFC3] font-bold sm:text-xl text-base leading-9">
              Company
            </h2>

            <ul className="flex flex-col gap-5 list-none text-sm font-light">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-8">
            <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
              Resources
            </h2>

            <ul className="flex flex-col gap-5 list-none text-sm font-light">
              //To be restored once the jobs section is implemented
              //<li>Jobs</li>
              <li><Link to="/allevents">Events</Link></li>
              <li>Mentorship</li>
            </ul>
          </div> */}

          {/* <div className="flex flex-col gap-8">
            <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
              Quick Links
            </h2>

            <ul className="flex flex-col gap-5 list-none text-sm font-light">
              <li>Contact Us</li>
              <li>Donate</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div> */}
        </div>
        {/* <div className="flex-2">
          <div className="flex flex-col gap-8">
            <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
              Subscribe to our Newsletter
            </h2>

            <div className="flex flex-col gap-5 text-sm font-light">
              <p className="text-sm left-6">
                Subscribe to our newsletter to get your
                <br />
                weekly dose of news, updates, tips and even
                <br />
                special offers
              </p>

              <form className="flex pr-4">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="px-4 py-3 rounded-lg rounded-r-none flex-3"
                />
                <button
                  type="submit"
                  className="rounded-r-lg px-4 py-3 flex-auto font-semibold text-white transition-all duration-200 bg-[#009975] border border-transparent hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>

      <div className="sm:mt-14 mt-10">
        <h1 className="text-center text-[#00FFC3] my-4 md:my-8">
          &copy; {year} SpaceYaTech | All Rights Reserved
        </h1>
      </div>

      {/* <img
        src={backup}
        alt="backup"
        className="h-12 w-12 object-contain absolute sm:bottom-14 bottom-0 right-10 cursor-pointer"
      /> */}
    </footer>
  );
}

export default Footer2;
