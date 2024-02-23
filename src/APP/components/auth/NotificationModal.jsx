import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function NotificationModal({ isOpen, setIsOpen, message }) {
  const closeModal = () => {
    setIsOpen(false);
  };

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-primary text-center"
                >
                  Before you continue... 😃
                </Dialog.Title>

                <div
                  className="p-2 mb-4 rounded-lg text-base  text-center"
                  role="alert"
                >
                  <p className="text-sm mt-6">
                    Please{" "}
                    <Link
                      to="/login"
                      className="italic underline cursor-pointer text-primary hover:text-gray-500 "
                    >
                      Log In{" "}
                    </Link>
                    or{" "}
                    <Link
                      to="/register"
                      className="italic underline cursor-pointer text-primary hover:text-gray-500 "
                    >
                      Create an account{" "}
                    </Link>{" "}
                    <br />
                    {message}.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default NotificationModal;

NotificationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
