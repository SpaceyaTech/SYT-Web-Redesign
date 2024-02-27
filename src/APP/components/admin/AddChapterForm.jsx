import React from "react";
import PropTypes from "prop-types";
import GeneralInfo from "./GeneralInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import Organizers from "./Organizers";

function AddChapterForm({ currentStep, theNext, thePrevious, collectedChapter, setCollectedChapter, formComplete }) {
  switch (currentStep) {
    case 0:
      return <GeneralInfo theNext={theNext} setCollectedChapter={setCollectedChapter} />;
    case 1:
      return <SocialMediaLinks thePrevious={thePrevious} theNext={theNext} setCollectedChapter={setCollectedChapter} />;
    case 2:
      return <Organizers thePrevious={thePrevious} collectedChapter={collectedChapter} formComplete={formComplete} />;
    default:
      return null;
  }
}
AddChapterForm.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

AddChapterForm.defaultProps = {
  currentStep: 0,
};

export default AddChapterForm;
