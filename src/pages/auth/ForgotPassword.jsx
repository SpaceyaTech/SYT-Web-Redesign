import { MdEmail, MdMessage } from "react-icons/md"; // Import react-icons
import { LazyLoadImage } from "react-lazy-load-image-component";
import ForgotPasswordImg from "../../assets/images/auth/forgot-password.svg";

function ForgotPassword() {
  return (
    <div className="flex flex-row justify-center items-center md:m-auto md:py-16 xl:px-14 lg:px-10 space-x-0 md:space-x-24">
      <div className="hidden md:block bg-[#F4F4F4] text-[#222222] rounded-2xl py-16 px-10 xl:w-[40%] lg:w-2/3 text-center">
        <h1 className="text-3xl md:text-4xl mb-6 font-semibold">
          Forgot Password?
        </h1>
        <h2 className="text-2xl mb-4">Let&apos;s recover your account</h2>
        <LazyLoadImage
          src={ForgotPasswordImg}
          alt="Forgot Password"
          className="m-auto"
        />
      </div>

      <div className="text-center px-6 py-3 sm:py-12 my-10 max-w-screen-md xl:w-1/3 lg:w-2/3 w-full text-[#080808]">
        <h2 className="text-3xl mb-10 font-medium">
          How do we reset your password?
        </h2>
        <p className="sm:w-2/3 m-auto mb-10">
          Select which contact detail we should use to reset your password
        </p>
        <form className="space-y-6">
          <div className="flex space-x-8 border rounded-xl border-[#79747E] py-2 px-4">
            <MdEmail className="text-xl" />
            <label
              htmlFor="email"
              className="text-left space-y-2 flex flex-col justify-center"
            >
              <span className="text-[#79747E]">Via Email</span>
              <input
                type="password"
                name="password"
                id="email"
                className="bg-white border-none border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
                placeholder="Enter New Password"
              />
            </label>
          </div>
          <div className="flex space-x-8 border rounded-xl border-[#79747E] py-2 px-4">
            <MdMessage className="text-xl" />
            <label
              htmlFor="password"
              className="text-left space-y-2 flex flex-col justify-center"
            >
              <span className="text-[#79747E]">Via SMS</span>
              <input
                id="password"
                type="password"
                name="password"
                className="bg-white border-none border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
                placeholder="Enter New Password"
              />
            </label>
          </div>
          <a
            href="#!"
            type="submit"
            className="bg-primary hover:bg-[#00664E] text-white text-xl rounded border-0 py-3 px-5 sm:px-8 w-full focus:outline-none"
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
