import Payment from "./Payment";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";

function EnrollmentStep({ index, formData, handleInputChange }) {
  switch (index) {
    case 1:
      return (
        <PersonalInformation
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    case 2:
      return (
        <Qualifications
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    case 3:
      return (
        <Payment formData={formData} handleInputChange={handleInputChange} />
      );
    default:
      return null;
  }
}

export default EnrollmentStep;
