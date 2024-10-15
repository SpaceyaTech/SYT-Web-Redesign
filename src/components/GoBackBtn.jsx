import { PiArrowCircleLeft } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function GoBackBtn() {
  return (
    <NavLink
      to={-1}
      data-testid="go-back-button"
      className="border cursor-pointer rounded-full bg-white p-1 w-fit"
    >
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <PiArrowCircleLeft
          className="text-green-header"
          style={{ fontSize: "25px" }}
        />
        <span className="capitalize text-green-header text-sm font-semibold">
          Go back
        </span>
      </div>
    </NavLink>
  );
}

export default GoBackBtn;
