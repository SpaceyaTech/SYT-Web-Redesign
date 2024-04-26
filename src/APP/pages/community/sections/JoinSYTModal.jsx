import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { joinSYT } from "../../../../assets/images/community";
import { sytLogoWhite } from "../../../../assets/images/icons";
import JoinSYTForm from "./JoinSYTForm";

function JoinSYTModal({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-5xl h-[calc(100vh-100px)] md:h-[640px] transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all">
                <div className="flex-center size-full bg-eventRSVPMobile md:bg-eventRSVPDesktop bg-cover bg-no-repeat">
                  <div
                    className="bg-red-200 w-1/2 h-full hidden md:flex relative bg-cover items-center justify-center p-6"
                    style={{
                      backgroundImage: `url(${joinSYT})`,
                    }}
                  >
                    <LazyLoadImage
                      src={sytLogoWhite}
                      alt="logo"
                      className="size-20 absolute top-6 left-6"
                    />

                    <div className="w-full text-white flex flex-col gap-6">
                      <h2 className="text-left text-3xl font-semibold">
                        Join Africa’s fastest growing tech community
                      </h2>
                    </div>
                  </div>

                  <JoinSYTForm closeModal={closeModal} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default JoinSYTModal;
