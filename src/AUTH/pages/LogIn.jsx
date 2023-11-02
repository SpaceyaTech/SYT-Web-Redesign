import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import LoginImg from "../../assets/images/auth/login.svg";
import useAuth from "../../hooks/useAuth";

function LogIn() {
  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/token/`,
        {
          username,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setAuth(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (auth?.access) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="flex flex-row justify-center items-center md:m-auto md:py-16 xl:px-14 lg:px-10 space-x-0 md:space-x-24">
      <div className="hidden md:block bg-[#F4F4F4] text-[#222222] rounded-2xl py-16 px-10 xl:w-[40%] lg:w-2/3 text-center">
        <h1 className="text-3xl md:text-4xl mb-6 font-semibold">
          Welcome Back!
        </h1>
        <h2 className="text-2xl">
          It&apos;s always a pleasure to see you again
        </h2>
        <img src={LoginImg} alt="Log in" className="m-auto" />
      </div>

      <div className="text-center px-6 py-3 sm:py-12 my-10 max-w-screen-md xl:w-1/3 lg:w-2/3 w-full text-[#080808]">
        <h2 className="text-3xl mb-10 font-medium">Login to your Account</h2>
        <p className="text-red-600 text-xs">{isError}</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className=" flex items-center justify-between">
            <label className="text-[#79747E]" htmlFor="rememberMe">
              <input
                name="rememberMe"
                className="mr-2 leading-tight"
                type="checkbox"
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-sm">Remember me</span>
            </label>

            <a
              href="#!"
              className="text-[#009975] hover:text-[#00664E] text-base"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[#009975] hover:bg-[#00664E] text-white text-xl rounded border-0 py-3 px-5 sm:px-8 w-full focus:outline-none"
          >
            Login
          </button>
          <p>
            New here?
            <a
              href="/auth/signup"
              className="text-[#009975] hover:text-[#00664E] text-base"
            >
              {" "}
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
