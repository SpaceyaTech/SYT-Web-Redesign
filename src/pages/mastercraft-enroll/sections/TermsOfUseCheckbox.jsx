import PropTypes from "prop-types";

function TermsOfUseCheckbox({ checked, onChange }) {
  return (
    <div className="flex md:items-center gap-2">
      <div className="relative flex items-center justify-center w-5 h-5 rounded-sm">
        <input
          type="checkbox"
          name="termsOfUse"
          id="termsOfUse"
          className="size-5 peer shrink-0 appearance-none border-2 border-primary rounded-sm bg-white checked:border-primary"
          checked={checked}
          required
          onChange={(e) => onChange(e.target.checked)}
          aria-label="Accept terms of use"
        />
        <svg
          className="absolute top-0 left-0 size-5 hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#009975"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <label
        htmlFor="termsOfUse"
        className="text-sm text-[#2E2E2E] font-normal"
      >
        I agree to the{" "}
        <span className="text-primary font-semibold">Terms of Use</span>{" "}
        <span className="text-primary font-semibold">, Refund Policy</span> and{" "}
        <span className="text-primary font-semibold">Privacy Policy</span>
      </label>
    </div>
  );
}

export default TermsOfUseCheckbox;

TermsOfUseCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
