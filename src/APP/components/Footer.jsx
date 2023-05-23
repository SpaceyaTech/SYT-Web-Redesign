import logo from "../../assets/images/sytLogo.png";

function Footer() {
  return (
    <footer>
      <div className=" bg-[#252533] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* logo and socials  */}
          <div className="my-6 md:mb-0">
            <img src={logo} className="h-24 mx-8" alt="FlowBite Logo" />
            {/* social logos  */}
          </div>
          {/* quick links  */}
          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] uppercase">
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
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] uppercase">
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
              <h2 className="mb-6 text-sm font-semibold text-[#00FFC3] uppercase">
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
          <div className="my-6 md:mb-0">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-[#00FFC3] uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-sm  text-white lg:ml-auto">
                Subscribe to our newsletter to get your weekly dose of news,
                updates, tips and even special offers
              </p>
            </div>
            <form
              className="
      relative
      my-4
      mx-auto
      max-w-lg
      space-y-4
      sm:flex sm:space-y-0 sm:items-end
    "
            >
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    className="
            block
            w-full
            px-4
            py-3
            sm:py-3.5
            text-base
            font-medium
            text-gray-900
            placeholder-gray-500
            border border-gray-300
            rounded-lg
            sm:rounded-l-lg sm:rounded-r-none sm:text-sm
            focus:outline-none focus:ring-1 focus:ring-primary
          "
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center
        justify-center
        w-full
        sm:w-auto
        px-8
        py-3
        sm:text-sm
        text-lg
        sm:py-3.5
        font-semibold
        text-white
        transition-all
        duration-200
        bg-[#009975]
        border border-transparent
        rounded-lg
        sm:rounded-r-lg sm:rounded-l-none
        hover:bg-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* signature  */}
        <h1 className="text-center text-[#00FFC3] my-4 md:my-8">
          &copy; 2023 SpaceYaTech | All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
