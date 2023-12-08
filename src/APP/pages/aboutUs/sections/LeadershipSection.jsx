import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";

import { Caroussel } from "../../../components";
import { closeIcon } from "../../../../assets/images/icons";
import { LeadershipData } from "../data";
import { buildComm } from "../../../../assets/images/aboutPage";

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
          to_email: "partnerships@spaceyatech.com",
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
    <section className="pt-16 sm:pt-0 pb-10 mx-auto w-full max-w-screen-2xl">
      <h1 className="md:text-3xl text-2xl font-semibold title-font text-[#323433] text-center">
        Meet our leadership
      </h1>

      <Caroussel CarousselData={LeadershipData} />

      <div className="bg-[#E5EFEC] flex -mt-36 pt-40 pb-8 md:pb-24 px-4 lg:px-14 xl:px-28 justify-between flex-col md:flex-row">
        <div className="space-y-4 md:w-1/2 mb-14">
          <h2 className="text-[#009975] items-center text-xl">
            Committed to building community
          </h2>
          <h3 className=" md:text-3xl text-2xl font-semibold text-gray-900 leading-8 md:leading-10">
            We partner with like-minded organizations to build the workforce for
            Africa’s transformation.
          </h3>
          <p className="leading-6 text-base md:mr-5">
            We have narrowed our focus to do just one thing; building capacity
            in tech. We partner with individuals, organizations and public
            institutions to mentor and coach young people, between the ages of
            18-35 in the technology skills they need to build the software that
            power the world.
          </p>
          <p className="leading-6 text-base md:mr-5">
            {" "}
            We therefore focus our energies and resources on ensuring that those
            getting in a tech career, and specifically IT, are directed to the
            right resources, connected with the right people in industry for
            mentorship and connected with job opportunities where they can earn
            from their hard work.
          </p>

          <button
            className="font-semibold text-white bg-[#009975] hover:border-[#009975] hover:border hover:text-[#009975] hover:bg-transparent border py-3 px-8 w-full md:w-auto focus:outline-none rounded-lg text-lg transition-all ease-in duration-150"
            type="button"
            onClick={openModal}
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
                      <button type="button" onClick={closeModal}>
                        <img
                          src={closeIcon}
                          alt="close"
                          className="object-contain w-4 h-4"
                        />
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
                            type="telephone"
                            placeholder="Phone number"
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
                          className="w-fit inline-flex justify-center rounded-lg border border-transparent bg-[#009975] px-8 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
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
        <div className="md:w-1/2">
          <img src={buildComm} alt="Space ya Tech Community" />
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
