import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../assets/images/socials";
import logo from "../../assets/images/sytLogo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  var now = new Date();
  var year = now.getFullYear();
  return (
    <footer>
      <div className=" bg-[#252533] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* logo and socials  */}
          <div className="mb-8 md:mb-0 mr-6 flex flex-col justify-start items-center md:w-1/4 w-1/2">
            <LazyLoadImage
              src={logo}
              alt="FlowBite Logo"
              className="h-24 md:mx-8 mx-0 object-contain"
              effect="blur"
            />
            {/* social logos  */}
            <div className="flex flex-row items-center  md:justify-between gap-4 justify-start my-4">
              <a href="/">
                <LazyLoadImage
                  src={facebook}
                  alt="facebook"
                  className="w-7 h-7"
                  effect="blur"
                />
              </a>

              <a href="/">
                <LazyLoadImage
                  src={instagram}
                  alt="instagram"
                  className="w-7 h-7"
                  effect="blur"
                />
              </a>

              <a href="/">
                <LazyLoadImage
                  src={twitter}
                  alt="twitter"
                  className="w-7 h-7"
                  effect="blur"
                />
              </a>

              <a href="/">
                <LazyLoadImage
                  src={linkedin}
                  alt="linkedIn"
                  className="w-7 h-7"
                  effect="blur"
                />
              </a>
            </div>
          </div>
          {/* quick links  */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] ">
                Company
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] ">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Mentorship
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] ">
                Quick Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    Contact us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Donate
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* form  */}
          <div className="my-0 md:mb-0 flex flex-col">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#00FFC3] ">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-white lg:ml-auto">
                Subscribe to our newsletter to get your weekly dose of news,
                updates, tips and even special offers
              </p>
            </div>
            <form
              className="
      relative
      my-4
      max-w-lg
      space-y-4
      sm:flex sm:space-y-0 sm:items-end
    "
            >
              <div className="flex-1 flex items-center">
                {/* <label htmlFor="email" className="sr-only">
                  Email address
                </label> */}
                {/* <div> */}
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  className="sm:flex-4 flex-auto block sm:w-2/3 w-full px-4 py-3 h-12 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg rounded-r-none sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter email address"
                />

                <button
                  type="submit"
                  className="sm:flex-1 flex-auto inline-flex items-center justify-center w-1/3 sm:w-auto px-8 py-3 h-12 sm:text-sm text-lg sm:py-3.5 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-lg sm:rounded-r-lg rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Subscribe
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
        {/* signature  */}
        <h1 className="text-center text-[#00FFC3] my-4 md:my-8">
          &copy; {year} SpaceYaTech | All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
