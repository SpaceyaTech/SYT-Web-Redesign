/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sytLogoGreen } from "../../../../../../assets/images/icons";

function RSVPForm({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // eslint-disable-next-line no-unused-vars
    const name = formData.get("name");
    // eslint-disable-next-line no-unused-vars
    const email = formData.get("email");

    closeModal();
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center  md:justify-start p-5 gap-8 md:p-12">
      <LazyLoadImage
        src={sytLogoGreen}
        alt="logo"
        className="size-24 object-contain md:self-start"
      />
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-2xl font-semibold">Event RSVP</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              name="name"
              id="name"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>

            <input
              type="email"
              placeholder="john.doe@example.com"
              id="email"
              name="email"
              required
              className="px-3 py-2.5 outline-none border rounded-md text-sm "
            />
          </div>

          <button
            type="submit"
            className="text-white bg-gradient-to-b to-primary from-green-dark p-2.5 rounded-md md:mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RSVPForm;

RSVPForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
