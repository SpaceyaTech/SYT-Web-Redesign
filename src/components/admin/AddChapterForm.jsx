import PropTypes from "prop-types";
import GeneralInfo from "./GeneralInfo";
import Organizers from "./Organizers";
import SocialMediaLinks from "./SocialMediaLinks";

function AddChapterForm({
  currentStep,
  theNext,
  thePrevious,
  collectedChapter,
  setCollectedChapter,
  formComplete,
}) {
  switch (currentStep) {
    case 0:
      return (
        <GeneralInfo
          theNext={theNext}
          setCollectedChapter={setCollectedChapter}
        />
      );
    case 1:
      return (
        <SocialMediaLinks
          thePrevious={thePrevious}
          theNext={theNext}
          setCollectedChapter={setCollectedChapter}
        />
      );
    case 2:
      return (
        <Organizers
          thePrevious={thePrevious}
          collectedChapter={collectedChapter}
          formComplete={formComplete}
        />
      );
    default:
      return null;
  }
}
AddChapterForm.propTypes = {
  currentStep: PropTypes.number.isRequired,
  theNext: PropTypes.func.isRequired,
  thePrevious: PropTypes.func.isRequired,
  collectedChapter: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({}),
    socialMediaLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    organizers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        image: PropTypes.shape({}),
        socialMediaLinks: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
  setCollectedChapter: PropTypes.func.isRequired,
  formComplete: PropTypes.func.isRequired,
};

export default AddChapterForm;
