/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

function Payment({ formData, handleInputChange, programTitle, pricing }) {
  const [cardData, setCardData] = useState({
    name: "",
    expiry: "",
    cvv: "",
    number: "",
  });

  const [mpesaPhone, setMpesaPhone] = useState("");

  const handleCardChange = (field, value) => {
    let formattedValue = value;

    if (field === "number") {
      // Format card number with spaces every 4 digits
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19); // Max length: 16 digits + 3 spaces
    } else if (field === "expiry") {
      // Format expiry as MM/YYYY
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{0,4})/, "$1/$2")
        .slice(0, 7);
    } else if (field === "cvv") {
      // Only allow 3-4 digits
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setCardData((prev) => ({ ...prev, [field]: formattedValue }));
  };

  const maskCardNumber = (number) => {
    const cleanNumber = number.replace(/\s/g, "");
    if (cleanNumber.length < 4) return "•••• •••• •••• ••••";
    const lastFour = cleanNumber.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        <h3 className="text-md font-semibold text-[#2E2E2E]">
          Select how you want to pay
        </h3>
        <div className="bg-[#F8F8F8] rounded-lg w-full flex flex-col md:flex-row gap-3 md:items-center justify-between py-2 px-4 md:py-6 ring-4 ring-[#F9F8FA99]">
          <RadioGroup
            defaultValue="2800"
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="2800"
                id="pay-whole"
                className="text-primary focus-visible:ring-primary border-primary"
              />
              <Label htmlFor="pay-whole">Pay whole</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="1000"
                id="deposit"
                className="text-primary focus-visible:ring-primary border-primary"
              />
              <Label htmlFor="deposit">
                <small>KES</small> 1,000.00 deposit
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="2500"
                id="balance"
                className="text-primary focus-visible:ring-primary border-primary"
              />
              <Label htmlFor="balance">
                <small>KES</small> 2,500.00 balance
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="w-full">
        <Tabs defaultValue="account" className="space-y-5">
          <TabsList className="w-full border-[0.5px] border-[#92CABD] rounded-lg p-0 overflow-clip">
            <TabsTrigger
              value="mpesa"
              className="w-1/2 h-full flex items-center justify-center gap-2"
            >
              <p className="text-xs md:text-sm">Pay with M-PESA</p>
              <span className="bg-[#BF8301] rounded-full text-white px-2 py-1 text-xs leading-5 hidden md:block">
                Save
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="card"
              className="w-1/2 h-full text-xs md:text-sm font-medium"
            >
              <p className="hidden md:block">Pay with credit or debit card</p>
              <p className="block md:hidden">Pay with card</p>
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="mpesa"
            className="ring-4 ring-[#F9F8FA99] rounded-3xl"
          >
            <div className="bg-white rounded-3xl border-0">
              <div className="px-4 py-6 md:px-12 md:py-8 flex flex-col md:flex-row w-full md:divide-x divide-gray-200 gap-8">
                {/* Left side - Phone number input */}
                <div className="w-full md:w-3/5 md:pr-8 space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="mpesa-phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Enter your M-PESA Phone number
                    </Label>
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
                      className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none placeholder:text-[#A3A3A3] w-full"
                    />
                  </div>

                  <div className="bg-[#F0F9F6] rounded-lg p-4 text-sm text-gray-700">
                    <p>
                      You are initiating a payment of{" "}
                      <strong>KES 1000.00</strong> to SPACEYATECH AFRICA. You
                      will receive an M-PESA prompt to enter your PIN to
                      complete this payment.
                    </p>
                  </div>
                </div>

                {/* Right side - Instructions */}
                <div className="w-full md:w-2/5 md:pl-8">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Steps to pay through M-PESA Paybill manually
                  </h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="font-medium">1.</span>
                      <span>Open your STK or MPESA app</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">2.</span>
                      <span>
                        Go to{" "}
                        <strong className="text-gray-800">Lipa na MPESA</strong>{" "}
                        then select{" "}
                        <strong className="text-gray-800">Paybill</strong>
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">3.</span>
                      <span>
                        Enter <strong className="text-gray-800">474365</strong>{" "}
                        as the Paybill number
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">4.</span>
                      <span>
                        Enter your{" "}
                        <strong className="text-gray-800">NAME</strong> as the
                        Account Number.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">5.</span>
                      <span>
                        Click <strong className="text-gray-800">OK</strong>.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">6.</span>
                      <span>
                        Send an email with your transaction code to{" "}
                        <strong className="text-[#92CABD]">
                          info@spaceyatech.com
                        </strong>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="card"
            className="ring-4 ring-[#F9F8FA99] rounded-3xl"
          >
            <Card className="rounded-3xl border-0">
              <CardContent className="px-4 py-6 md:px-12 md:py-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side - Form fields */}
                  <div className="w-full md:w-3/5 space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="card-name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Name on card
                      </Label>
                      <Input
                        id="card-name"
                        type="text"
                        placeholder="John Doe"
                        value={cardData.name}
                        onChange={(e) =>
                          handleCardChange("name", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#92CABD] focus:border-transparent outline-none text-gray-700 focus-visible:ring-2 focus-visible:ring-[#92CABD] focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="expiry"
                          className="text-sm font-medium text-gray-700"
                        >
                          Expiry date
                        </Label>
                        <Input
                          id="expiry"
                          type="text"
                          placeholder="MM/YYYY"
                          value={cardData.expiry}
                          onChange={(e) =>
                            handleCardChange("expiry", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#92CABD] focus:border-transparent outline-none text-gray-700 focus-visible:ring-2 focus-visible:ring-[#92CABD] focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="cvv"
                          className="text-sm font-medium text-gray-700"
                        >
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={cardData.cvv}
                          onChange={(e) =>
                            handleCardChange("cvv", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#92CABD] focus:border-transparent outline-none text-gray-700 focus-visible:ring-2 focus-visible:ring-[#92CABD] focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="card-number"
                        className="text-sm font-medium text-gray-700"
                      >
                        Card number
                      </Label>
                      <Input
                        id="card-number"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardData.number}
                        onChange={(e) =>
                          handleCardChange("number", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#92CABD] focus:border-transparent outline-none text-gray-700 focus-visible:ring-2 focus-visible:ring-[#92CABD] focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>

                  {/* Right side - Card preview */}
                  <div className="w-full md:w-2/5 flex items-center justify-center">
                    <div className="w-full max-w-[280px]">
                      <div className="flex gap-3 mb-4 justify-center md:justify-start">
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm border border-gray-200">
                          <svg viewBox="0 0 48 32" className="w-8 h-5">
                            <circle cx="15" cy="16" r="10" fill="#EB001B" />
                            <circle cx="33" cy="16" r="10" fill="#F79E1B" />
                            <path
                              d="M24 8.5c2.5 2.5 4 6 4 9.5s-1.5 7-4 9.5c-2.5-2.5-4-6-4-9.5s1.5-7 4-9.5z"
                              fill="#FF5F00"
                            />
                          </svg>
                        </div>

                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm border border-gray-200">
                          <svg viewBox="0 0 48 16" className="w-8 h-4">
                            <text
                              x="24"
                              y="12"
                              textAnchor="middle"
                              fill="#1A1F71"
                              fontSize="10"
                              fontWeight="bold"
                              fontFamily="Arial"
                            >
                              VISA
                            </text>
                          </svg>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                        {/* Card chip */}
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-10 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 opacity-80" />
                        </div>

                        <div className="relative z-10">
                          <div className="text-white text-xs font-medium mb-8">
                            {cardData.name || "Mastercraft"}
                          </div>

                          <div className="text-white text-lg tracking-[0.2em] mb-8 font-mono">
                            {maskCardNumber(cardData.number)}
                          </div>

                          <div className="flex justify-between items-end text-white text-xs">
                            <div>
                              <div className="text-gray-400 mb-1 text-[10px] uppercase tracking-wide">
                                Cardholder Name
                              </div>
                              <div className="font-medium">
                                {cardData.name || "Personal card name"}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-400 mb-1 text-[10px] uppercase tracking-wide">
                                Expires
                              </div>
                              <div className="font-medium">
                                {cardData.expiry || "02/30"}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full" />
                        <div className="absolute -top-5 -left-5 w-32 h-32 bg-white opacity-5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* <h3 className="text-lg font-semibold text-[#2E2E2E]">
        Select how you want to pay
      </h3>

      <div className="flex flex-col gap-4">
        <div className="bg-[#F8F8F8] rounded-lg w-full flex flex-col md:flex-row gap-3 items-center justify-between py-2 px-4">
          asejnr
        </div>
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
      </div> */}
    </div>
  );
}

export default Payment;
