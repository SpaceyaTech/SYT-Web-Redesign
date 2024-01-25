import { useState } from "react";
import { Navigate } from "react-router-dom";
import privateAxios from "../../../api/privateAxios";
import SignUpImg from "../../../assets/images/auth/signup.svg";
import useAuth from "../../../hooks/useAuth";

function SignUp() {
  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getToken = async () => {
    try {
      const response = await privateAxios.post(
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await privateAxios.post(
        `${process.env.REACT_APP_API_BASE_URL}/users/`,
        {
          username,
          first_name: firstname,
          last_name: lastname,
          email,
          phone_number: phoneNumber,
          password,
          confirm_password: confirmPassword,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data) getToken();
    } catch (error) {
      setError(error.message);
    }
  };

  if (auth?.access) {
    return <Navigate to="/shop/checkout" />;
  }

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
        <p className="text-red-600 text-xs">{isError}</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            name="lastname"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            name="username"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone-number"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            name="password"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#79747E] placeholder-[#49454F] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded sm:text-sm focus:ring-1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-[#00664E] text-white text-xl rounded border-0 py-3 px-5 sm:px-8 w-full focus:outline-none"
          >
            {isLoading ? "Loading..." : "Create Account"}
          </button>
          <p>
            Already have an account?
            <a
              href="/login"
              className="text-primary hover:text-[#00664E] text-base"
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
