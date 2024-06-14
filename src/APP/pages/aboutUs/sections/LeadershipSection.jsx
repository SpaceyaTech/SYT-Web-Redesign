import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineClose } from "react-icons/ai"; // Import react-icons

import { PartnerWithUs } from "../../../../assets/images/aboutPage";
import { Caroussel } from "../../../components";
import { LeadershipData } from "../data";

// env var
const SERVICE_ID =
  import.meta.env.VITE_SERVICE_ID || window._env_.VITE_SERVICE_ID;
const TEMPLATE_ID =
  import.meta.env.VITE_TEMPLATE_ID || window._env_.VITE_TEMPLATE_ID;
const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID || window._env_.VITE_PUBLIC_ID;

function LeadershipSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formRef = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        {
          from_name: name,
          to_name: "SYT Admin",
          from_email: email,
          to_email: "info@spaceyatech.com",
          message,
          phoneNumber,
        },
        `${PUBLIC_ID}`
      )
      .then(
        (result) => {
          alert("Thank you. We will get back to you as soon possible.");

          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setPhoneNumber("");
          closeModal();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          closeModal();
          alert("Sorry, something went wrong! 💀");
        }
      );
  };

  return (
    <section className="pt-16 sm:pt-0 pb-10 mx-auto w-full max-w-screen-2xl sm:mt-24 px-4 md:px-0">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4 my-6">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          Our leadership
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>

      <h3 className="md:text-3xl text-2xl font-semibold title-font text-green-dark text-center">
        A community is only as good
        <br /> as the leadership
      </h3>

      <Caroussel CarousselData={LeadershipData} />
      <div className="border bg-white p-2 w-full rounded-2xl md:rounded-[20px] lg:col-span-2 mt-12">
        <div className="bg-[#E5EFEC] rounded-xl flex justify-between flex-col md:flex-row">
          <div className="md:w-1/2">
            <LazyLoadImage
              effect="blur"
              src={PartnerWithUs}
              alt="Space ya Tech Community"
              className="md:rounded-l-xl object-cover size-full"
            />
          </div>
          <div className="space-y-4 md:w-1/2 px-6 flex flex-col justify-center md:my-0 my-6">
            <h2 className="w-fit text-green-dark text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
              Partner with us
            </h2>
            <h3 className="md:text-3xl text-2xl font-semibold text-green-dark leading-8 md:leading-10">
              We collaborate with similar organizations to develop Africa’s
              skilled workforce
            </h3>
            <p className="leading-6 text-base md:mr-5">
              Our main focus is on building tech capacity. We collaborate with
              individuals, organizations, and public institutions to mentor and
              coach young people aged 18-35 in essential technology skills. Our
              goal is to empower them to create software that drives global
              innovation. Through targeted resources, industry connections, and
              job opportunities, we pave the way for their success.
            </p>

            <button
              type="button"
              aria-label="Partner with us"
              onClick={openModal}
              className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
            >
              Partner with us
            </button>

            {/* Email us Modal */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => closeModal()}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-md bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all flex flex-col items-end gap-4">
                        <button
                          type="button"
                          aria-label="Close modal"
                          onClick={closeModal}
                        >
                          <AiOutlineClose className="w-4 h-4" />
                        </button>
                        <form
                          className="flex flex-col gap-4 md:gap-6 w-full"
                          onSubmit={handleSubmit}
                          ref={formRef}
                        >
                          <Dialog.Title
                            as="h3"
                            className="text-base md:text-lg font-medium leading-5 md:leading-6 text-gray-900 pl-2"
                          >
                            Let’s build something great together!
                          </Dialog.Title>

                          <p className="pl-2 text-sm md:text-[15px] font-normal leading-5 md:leading-7 my-0 md:my-2">
                            We are excited about the possibility of partnering
                            with you. Share a few details with us and let’s
                            explore how we can collaborate for mutual success.
                          </p>

                          <div className="flex flex-col gap-4">
                            <input
                              type="text"
                              placeholder="Company name"
                              required
                              className="w-full outline-none text-base font-normal placeholder:text-gray-600 border border-[#79747E] rounded-[4px] pl-4 py-2"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />

                            <input
                              type="email"
                              placeholder="Email address"
                              required
                              className="w-full outline-none text-base font-normal placeholder:text-gray-600 border border-[#79747E] rounded-[4px] pl-4 py-2"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                              type="tel"
                              placeholder="Phone number"
                              pattern="[0-9\s]{10,13}"
                              required
                              className="w-full outline-none text-base font-normal placeholder:text-gray-600 border border-[#79747E] rounded-[4px] pl-4 py-2"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <textarea
                              cols="30"
                              rows="5"
                              placeholder="Brief description of partnership proposal "
                              required
                              className="w-full outline-none text-base placeholder:text-gray-600 border border-[#79747E] rounded-[4px] pl-4 py-2"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>

                          <button
                            type="submit"
                            aria-label="Submit message"
                            className="w-fit inline-flex justify-center rounded-lg border border-transparent bg-primary px-8 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </button>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
