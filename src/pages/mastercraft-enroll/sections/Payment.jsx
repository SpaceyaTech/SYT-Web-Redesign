/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";
import PhoneInput from "react-phone-number-input";

function Payment({ formData, handleInputChange }) {
  return (
    <div className="flex flex-col gap-6 xl:gap-6">
      <p className="text-sm text-[#464E49] font-normal">
        You&apos;re going to pay{" "}
        <span className="text-base font-semibold">2800.00</span> instead of{" "}
        <span className="text-base font-semibold text-red-600">3500.00</span> to
        SpaceYaTech because you are among the first 5 applicants.
      </p>

      <h5 className="text-lg font-semibold">Pay to MPESA</h5>

      <form className="bg-[#FBFCFE] rounded-3xl p-3 md:px-4 md:py-8 flex flex-col justify-between gap-4 md:gap-8 xl:gap-16 md:flex-row w-full">
        <div className="w-full md:w-3/5 flex flex-col gap-6 md:gap-12">
          <ul className="md:max-w-[66%] flex flex-col gap-2">
            <li className="flex items-center justify-between">
              <h6 className="text-[#6D6D6D] text-base">Enrollment fee</h6>
              <small className="text-[#6D6D6D]">—</small>
              <p className="text-base font-semibold">
                <span className="text-xs font-normal">KES</span> 3500.00
              </p>
            </li>

            <li className="flex items-center justify-between">
              <h6 className="text-[#6D6D6D] text-base">Discount</h6>
              <small className="text-[#6D6D6D]">—</small>
              <p className="text-base font-semibold">
                <span className="text-xs font-normal">KES</span> 700.00
                <small className="text-xs text-[#DE8F20]">(-20%)</small>
              </p>
            </li>

            <hr className="" />

            <li className="flex items-center justify-between mt-2">
              <h6 className="text-base">Total</h6>
              <p className="text-base font-semibold">
                <span className="text-xs font-normal">KES</span> 2800.00
              </p>
            </li>
          </ul>

          <div className="flex flex-col gap-5 md:max-w-[66%]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="paymentPhoneNumber"
                className="text-sm text-[#5A5A5A]"
              >
                Enter your MPESA Phone number
              </label>
              <PhoneInput
                defaultCountry="KE"
                withCountryCallingCode
                value={formData.paymentPhoneNumber}
                onChange={(value) =>
                  handleInputChange("paymentPhoneNumber", value)
                }
                type="text"
                name="paymentPhoneNumber"
                id="paymentPhoneNumber"
                className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.69171 20.1161C8.28274 20.1161 8.57825 20.1161 8.84747 20.216C8.88486 20.2298 8.92172 20.2451 8.95797 20.2617C9.21897 20.3815 9.42793 20.5904 9.84585 21.0083C10.8078 21.9702 11.2887 22.4512 11.8805 22.4955C11.96 22.5015 12.04 22.5015 12.1195 22.4955C12.7113 22.4512 13.1923 21.9702 14.1541 21.0083C14.5721 20.5904 14.781 20.3815 15.042 20.2617C15.0783 20.2451 15.1151 20.2298 15.1525 20.216C15.4218 20.1161 15.7173 20.1161 16.3083 20.1161H16.4173C17.9252 20.1161 18.6792 20.1161 19.1476 19.6476C19.6161 19.1792 19.6161 18.4252 19.6161 16.9173V16.8083C19.6161 16.2173 19.6161 15.9218 19.716 15.6525C19.7298 15.6151 19.7451 15.5783 19.7617 15.542C19.8815 15.281 20.0904 15.0721 20.5083 14.6541C21.4702 13.6923 21.9512 13.2113 21.9955 12.6195C22.0015 12.54 22.0015 12.46 21.9955 12.3805C21.9512 11.7887 21.4702 11.3078 20.5083 10.3458C20.0904 9.92793 19.8815 9.71897 19.7617 9.45797C19.7451 9.42172 19.7298 9.38486 19.716 9.34747C19.6161 9.07825 19.6161 8.78274 19.6161 8.19171V8.08269C19.6161 6.57479 19.6161 5.82083 19.1476 5.35239C18.6792 4.88394 17.9252 4.88394 16.4173 4.88394H16.3083C15.7173 4.88394 15.4218 4.88394 15.1525 4.78405C15.1151 4.77018 15.0783 4.75491 15.042 4.73828C14.781 4.61855 14.5721 4.40959 14.1541 3.99167C13.1923 3.02977 12.7113 2.54882 12.1195 2.50447C12.04 2.49851 11.96 2.49851 11.8805 2.50447C11.2887 2.54882 10.8078 3.02977 9.84585 3.99167C9.42793 4.40959 9.21897 4.61855 8.95797 4.73828C8.92172 4.75491 8.88486 4.77018 8.84747 4.78405C8.57825 4.88394 8.28274 4.88394 7.69171 4.88394H7.58269C6.07479 4.88394 5.32083 4.88394 4.85239 5.35239C4.38394 5.82083 4.38394 6.57479 4.38394 8.08269V8.19171C4.38394 8.78274 4.38394 9.07825 4.28405 9.34747C4.27018 9.38486 4.25491 9.42172 4.23828 9.45797C4.11855 9.71897 3.90959 9.92793 3.49167 10.3458C2.52977 11.3078 2.04882 11.7887 2.00447 12.3805C1.99851 12.46 1.99851 12.54 2.00447 12.6195C2.04882 13.2113 2.52977 13.6923 3.49167 14.6541C3.90959 15.0721 4.11855 15.281 4.23828 15.542C4.25491 15.5783 4.27018 15.6151 4.28405 15.6525C4.38394 15.9218 4.38394 16.2173 4.38394 16.8083V16.9173C4.38394 18.4252 4.38394 19.1792 4.85239 19.6476C5.32083 20.1161 6.07479 20.1161 7.58269 20.1161H7.69171Z"
                    stroke="#017C5F"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 9.5L9 15.5"
                    stroke="#017C5F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 15.5H14.9892M9.01076 9.5H9"
                    stroke="#017C5F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-sm text-[#464E49]">Apply Promo Code</p>
              </div>

              <div className="flex gap-4 items-end">
                <input
                  type="text"
                  name="promoCode"
                  id="promoCode"
                  onChange={(e) =>
                    handleInputChange("promoCode", e.target.value)
                  }
                  value={formData.promoCode || ""}
                  className="border border-[#D9D9D9] rounded-lg p-2 max-w-44 outline-none"
                />

                <button
                  type="button"
                  className="text-primary text-base font-medium"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="border-t md:border-0 md:border-l p-3 md:py-3 md:pl-8 md:pr-0 flex flex-col gap-3">
            <h6 className="text-sm font-medium text-[#5A5A5A]">
              Steps to pay through M-PESA Paybill manually
            </h6>

            <ol className="list-decimal list-inside flex flex-col gap-1 text-sm font-normal text-[#5A5A5A]">
              <li>Open your STK or MPESA app</li>
              <li>
                Go to{" "}
                <span className="text-black font-medium">Lipa na MPESA</span>{" "}
                then select{" "}
                <span className="text-black font-medium">Paybill</span>
              </li>
              <li>
                Enter <span className="text-black font-medium">474365</span> as
                the Paybill number
              </li>
              <li>
                Enter your <span className="text-black font-medium">NAME</span>{" "}
                as the Account Number
              </li>
              <li>
                Click <span className="text-black font-medium">OK</span>
              </li>
            </ol>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
