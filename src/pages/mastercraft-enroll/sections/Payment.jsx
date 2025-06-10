/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { Palette } from "lucide-react";
import PhoneInput from "react-phone-number-input";

function Payment({ formData, handleInputChange, programTitle, pricing }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-[#2E2E2E]">
        Payment Information
      </h3>

      <div className="flex flex-col gap-4">
        <div className="bg-[#F8F8F8] rounded-lg w-full flex flex-col md:flex-row gap-3 items-center justify-between py-2 px-4">
          <div className="md:w-3/5 flex items-center gap-2 md:gap-4">
            <div className="size-14 md:size-16 border-2 border-white rounded-md flex-center p-2 md:p-2.5 bg-[#E9F4F1]">
              <Palette color="green" size={32} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-2 items-start font-inter">
              <h5 className="text-sm text-black font-medium">{programTitle}</h5>
              <p className="text-xs text-[#686868] font-normal">
                Mastercraft Program ● 8 weeks
              </p>
            </div>
          </div>

          <div className="md:py-5 md:px-8">
            <h4 className="text-green-dark font-semibold text-base font-inter">
              <small className="text-xs">KES</small>{" "}
              {new Intl.NumberFormat("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }).format(Number(pricing.fullAmount - pricing.discountedAmount))}
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="paymentPhoneNumber"
            className="text-sm text-[#2E2E2E] font-medium"
          >
            M-PESA Phone Number*
          </label>
          <PhoneInput
            defaultCountry="KE"
            withCountryCallingCode
            value={formData.paymentPhoneNumber}
            onChange={(value) => handleInputChange("paymentPhoneNumber", value)}
            type="text"
            name="paymentPhoneNumber"
            id="paymentPhoneNumber"
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          />
          <p className="text-xs text-gray-500">
            You will receive a payment prompt on this number
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="promoCode"
            className="text-sm text-[#2E2E2E] font-medium"
          >
            Promo Code (Optional)
          </label>
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            value={formData.promoCode}
            onChange={(e) => handleInputChange("promoCode", e.target.value)}
            className="p-3 border border-[#BAC6C3] rounded-lg text-sm text-[#2E2E2E] bg-white"
            placeholder="Enter promo code if available"
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
