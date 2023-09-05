import React from "react";
import GeneralInfo from "./GeneralInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import Organizers from "./Organizers";

function AddChapterForm({ currentStep }) {
  switch (currentStep) {
    case 0:
      return <GeneralInfo />;
    case 1:
      return <SocialMediaLinks />;
    case 2:
      return <Organizers />;
    default:
      return null;
  }
}
AddChapterForm.propTypes = {
  currentStep: null,
};

AddChapterForm.defaultProps = {
  currentStep: 0,
};

export default AddChapterForm;
