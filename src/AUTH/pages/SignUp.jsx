import React from "react";
import SignUpImg from "./../../assets/images/auth/signup.svg";

function SignUp() {
  return (
    <div className="flex flex-row justify-center items-center md:m-auto md:py-16 xl:px-14 lg:px-10 space-x-0 md:space-x-24">
      <div className="hidden md:block bg-[#F4F4F4] text-[#222222] rounded-2xl py-16 px-10 xl:w-[40%] lg:w-2/3 text-center">
        <h1 className="text-3xl mb-6 font-semibold">
          Welcome to SpaceyaTech
          <br />
          Shop!
        </h1>
        <h2 className="text-2xl">Let&apos;s get you started</h2>
        <img src={SignUpImg} alt="Sign Up Page" className="m-auto" />
      </div>

      <div className="text-center px-6 py-3 sm:py-12 my-10 max-w-screen-md xl:w-1/3 lg:w-2/3 w-full text-[#080808]">
        <h2 className="text-3xl mb-10 font-medium">Create Your Account</h2>

        <form className="space-y-6">
          <input
            type="text"
            name="full-name"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Your Full Name"
          />
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Your Email Address"
          />
          <input
            type="tel"
            name="phone-number"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Your Phone Number"
          />
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Enter Password"
          />
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Enter Password"
          />

          <a
            href="/shop"
            type="submit"
            className="bg-[#009975] hover:bg-[#00664E] text-white text-xl rounded border-0 py-3 px-5 sm:px-8 w-full focus:outline-none"
          >
            Continue
          </a>
          <p>
            Already have an account?
            <a
              href="/auth/login"
              className="text-[#009975] hover:text-[#00664E] text-base"
            >
              {" "}
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
