import React, { useState } from "react";

//this page will redirect from the donate page on click of a single project
function SingleProductDonatePage() {
  const [value, setValue] = useState(50);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const calculateBackground = () =>
    `linear-gradient(to right, #009975 0%, #009975 ${value}%, gray ${value}%, gray 100%)`;
  return (
    <section className="px-10 py-4 space-y-5 mb-10">
      <h1 className="text-2xl font-semibold">Mastori</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4">
          <div className="h-[20rem]">
            <img
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="img"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-col sm:flex-row gap-2">
              <div class="flex mb-5 -space-x-4">
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="img-1"
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="img-2"
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="img-3"
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt="img-4"
                />
              </div>
              <p className="-mt-6 sm:-mt-4">100 donors</p>
            </div>
            <div className="flex items-center gap-2 flex-col-reverse sm:flex-row mt-2 sm:-mt-3">
              <p>Organizers</p>
              <img src="/donate.png" alt="" />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 p-4 self-start border rounded-xl">
          <div>
            <p>
              KES 100,000<span className="text-xs text-gray-500 mx-1">of Ksh. 250,000 raised </span>
            </p>
            <div className="relative">
              <input
                id="medium-range"
                type="range"
                value={value}
                min={0}
                max={100}
                onChange={handleInputChange}
                style={{
                  background: calculateBackground(),
                  height: "6px",
                  borderRadius: "5px",
                }}
                className="w-full appearance-none cursor-pointer"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg">Donate via MPESA</h2>
            <ul className="text-gray-600">
              <li>1. Go to your sim toolkit or MPESA app</li>
              <li>2. Choose lipa na MPESA</li>
              <li>3. Enter business number 247247</li>
              <li>4. Enter 12345678901 as your account number</li>
              <li>5. Enter the amount you wish to donate</li>
              <li>6. Input your PIN</li>
              <li>7. You will receive a confirmation message from MPESA</li>
            </ul>
          </div>
          <hr className="text-gray-400" />
          <div className="space-y-3">
            <p>Or Make a difference with a dollar</p>
            <div className="flex items-center gap-3 text-sm">
              <button className="block bg-[#009975] text-white py-3 sm:p-2 w-full rounded-md">Donate Token $1 </button>
              <button className="block border border-[#009975] text-[#009975] py-3 sm:p-2 w-full rounded-md">Share Link</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 space-y-4 p-4 self-start">
          <div className="space-y-2">
            <p>About Mastori</p>
            <p>
              Support SpaceYaTech in raising KES 250,000 to build a CMS platform
              that will help get tech related news to techies all over Africa
              and beyond.
            </p>
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis...
            </p>
            <p className="text-[#009975] underline">Read more</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductDonatePage;
