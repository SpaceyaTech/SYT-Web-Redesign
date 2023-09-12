import React from "react";
import ResetPasswordImg from "../../assets/images/auth/reset-password.svg";

function ResetPassword() {
  return (
    <div className="flex flex-row justify-center items-center md:m-auto md:py-16 xl:px-14 lg:px-10 space-x-0 md:space-x-24">
      <div className="hidden md:block bg-[#F4F4F4] text-[#222222] rounded-2xl py-16 px-10 xl:w-[40%] lg:w-2/3 text-center">
        <h1 className="text-3xl md:text-4xl mb-6 font-semibold">
          Reset Password
        </h1>
        <h2 className="text-2xl mb-4">
          Let&apos;s create a new password for your account
        </h2>
        <img src={ResetPasswordImg} alt="Reset Password" className="m-auto" />
      </div>

      <div className="text-center px-6 py-3 sm:py-12 my-10 max-w-screen-md xl:w-1/3 lg:w-2/3 w-full text-[#080808]">
        <h2 className="text-3xl mb-10 font-medium"> Reset Password</h2>
        <p className="sm:w-2/3 m-auto mb-10">
          Remember to use a strong password to make your account secure
        </p>
        <form className="space-y-6">
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Enter New Password"
          />
          <input
            type="text"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Confirm New Password"
          />
          <a
            href="#!"
            type="submit"
            className="bg-[#009975] hover:bg-[#00664E] text-white text-xl rounded border-0 py-3 px-5 sm:px-8 w-full focus:outline-none"
          >
            Reset Password
          </a>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
