import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  linkedin,
  twitter,
  spotify,
  youtube,
  instagram,
  facebook,
} from "../../assets/images/socials";
import logo from "../../assets/images/sytLogo.png";

function Footer2() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-[#252533] text-white ">
      <div className="md:p-12 py-8 px-4 relative max-w-[1440px] mx-auto">
        <div className="flex lg:flex-row flex-col md:gap-16 gap-8">
          <div className="flex-3 flex flex-col sm:items-start items-center">
            {/* logo */}
            <LazyLoadImage
              src={logo}
              alt="logo"
              className="w-[124px] h-32 md:ml-0 ml-4 object-contain"
            />
            {/* socials */}
            <div className="flex flex-col items-center">
              <div className="flex items-center md:gap-5 gap-3 py-4">
                <a
                  href="https://www.facebook.com/spaceyatech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={facebook}
                    alt="facebook"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://www.instagram.com/spaceyatech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={instagram}
                    alt="instagram"
                    className="w-7 h-7"
                  />
                  {/* < src={instagram} alt="instagram" className="w-7 h-7" /> */}
                </a>
                <a
                  href="https://x.com/SpaceYaTech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={twitter}
                    alt="twitter"
                    className="w-7 h-7"
                  />
                </a>

                <a
                  href="https://linkedin.com/company/spaceyatech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={linkedin}
                    alt="linkedIn"
                    className="w-7 h-7"
                  />
                </a>
              </div>
              <div className="flex items-center md:gap-5 gap-3">
                <a
                  href="https://www.youtube.com/@spaceyatech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={youtube}
                    alt="youtube"
                    className="w-7 h-7"
                  />
                </a>

                <a
                  href="https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={spotify}
                    alt="spotify"
                    className="w-7 h-7"
                  />
                </a>
              </div>
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
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                Resources
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">
                {/* To be restored once the jobs section is implemented  */}
                <li>Jobs</li>
                <li>
                  {/* <Link to="/allevents"> */}
                  Events
                  {/* </Link> */}
                </li>
                <li>
                  <a
                    href="http://mentorlst.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mentorship
                  </a>
                </li>

                <li>
                  <a href="/gallery" className="hover:underline text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                Quick Links
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">
                <li>Contact Us</li>
                <li>Donate</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
          <div className="flex-2">
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

                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-auto px-2 md:px-4 py-3 rounded-lg rounded-r-none flex-3 outline-none text-black font-medium"
                  />
                  <button
                    type="submit"
                    className="rounded-r-lg px-2 md:px-4 py-3 flex-auto font-semibold text-white transition-all duration-200 bg-primary border border-transparent hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mt-14 mt-10">
          <h1 className="text-center text-[#00FFC3] my-4 md:my-8">
            &copy; {year} SpaceYaTech | All Rights Reserved
          </h1>
        </div>
        {/* <LazyLoadImage
          src={backup}
          alt="backup"
          className="w-7 h-7"

        /> */}
      </div>
    </footer>
  );
}

export default Footer2;
