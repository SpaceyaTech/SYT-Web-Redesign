/* eslint-disable jsx-a11y/label-has-associated-control */
import { Disclosure, RadioGroup } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function PaymentMethod({ handleSubmit, isPending, setForm }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const formObject = {
    name,
    cardNumber,
    expiryDate,
    cvc,
    phoneNumber,
    country,
    postalAddress,
    postalCode,
    city,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setForm(formObject);
    handleSubmit();
  };

  return (
    <form
      className="flex flex-col w-full min-w-40 h-max"
      onSubmit={handleFormSubmit}
    >
      <div className="bg-white p-5 w-full border rounded-md">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <RadioGroup
          value={selectedPaymentMethod}
          onChange={setSelectedPaymentMethod}
        >
          <RadioGroup.Option value="card">
            {({ checked }) => (
              <Disclosure defaultOpen={checked}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full py-2 text-left text-md font-medium">
                      <div className="space-x-2">
                        <input type="radio" checked={checked} readOnly />
                        <span>Debit/Credit Card</span>
                      </div>
                      {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-4 pb-2 text-md text-gray-500">
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="cardholder-name"
                            className="block text-gray-700"
                          >
                            Cardholder name
                          </label>
                          <input
                            id="cardholder-name"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                            placeholder="Enter cardholder name"
                            value={name}
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="card-number"
                            className="block text-gray-700"
                          >
                            Card number
                          </label>
                          <input
                            id="card-number"
                            onChange={(e) => setCardNumber(e.target.value)}
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                            placeholder="Enter card number"
                            value={cardNumber}
                            required
                          />
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label
                              htmlFor="expiry-date"
                              className="block text-gray-700"
                            >
                              Expiry date
                            </label>
                            <input
                              id="expiry-date"
                              onChange={(e) => setExpiryDate(e.target.value)}
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                              placeholder="MM/YY"
                              value={expiryDate}
                              required
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              htmlFor="cardholder-cvc"
                              className="block text-gray-700"
                            >
                              CVC/CVV
                            </label>
                            <input
                              id="cardholder-cvc"
                              onChange={(e) => setCvc(e.target.value)}
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                              placeholder="..."
                              value={cvc}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
          </RadioGroup.Option>
          <hr className="my-4" />
          <RadioGroup.Option value="mpesa">
            {({ checked }) => (
              <Disclosure defaultOpen={checked}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full py-2 text-left text-md font-medium">
                      <div className="space-x-2">
                        <input type="radio" checked={checked} readOnly />
                        <span>Mpesa</span>
                      </div>
                      {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-4 pb-2 text-md text-gray-500">
                      <div>
                        <label
                          htmlFor="cardholder-number"
                          className="block text-gray-700"
                        >
                          Phone number
                        </label>
                        <input
                          id="cardholder-number"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="tel"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          required
                        />
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <button
          className="from-teal-700 to-primary bg-gradient-to-b w-full mt-5 py-3 rounded-md text-white font-bold hover:to-primary/90 hover:from-teal-700/90"
          type="submit"
        >
          {isPending ? "Loading..." : "Pay and place order"}
        </button>
      </div>

      {/* Shipping Information */}
      <div className="border rounded-md mt-4 min-h-40 p-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <hr />
        <div className="flex gap-5 text-md items-center flex-wrap w-full my-4">
          <div className="flex-1">
            <label
              htmlFor="cardholder-name"
              className="block text-gray-700 text-md"
            >
              Country or region
            </label>
            <input
              id="cardholder-name"
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
              placeholder="Select Country"
              value={country}
              required
              aria-label="selection"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cardholder-number" className="block text-gray-700 ">
              Phone number
            </label>
            <input
              id="cardholder-number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
              placeholder="Enter Phone number"
              value={phoneNumber}
              required
            />
          </div>
        </div>
        <div className="flex gap-5 text-md items-center flex-wrap w-full my-3">
          <div className="flex-1">
            <label
              htmlFor="cardholder-postal"
              className="block text-gray-700 text-md"
            >
              Postal Address
            </label>
            <input
              id="cardholder-postal"
              onChange={(e) => setPostalAddress(e.target.value)}
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
              placeholder="Postal Address e.g 123 ABC"
              value={postalAddress}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="postal-code" className="block text-gray-700 ">
              Postal code
            </label>
            <input
              id="postal-code"
              onChange={(e) => setPostalCode(e.target.value)}
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
              placeholder="Postal code e.g 00100"
              value={postalCode}
              required
            />
          </div>
        </div>
        <div className="flex-1 text-md">
          <label htmlFor="city" className="block text-gray-700 ">
            City
          </label>
          <input
            id="city"
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
            placeholder="City e.g Nairobi"
            value={city}
            required
          />
        </div>
      </div>
    </form>
  );
}

export default PaymentMethod;

PaymentMethod.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  setForm: PropTypes.func.isRequired,
};
