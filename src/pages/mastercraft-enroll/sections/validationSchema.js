import { object, string, number, array, boolean } from "yup";

const validationSchema = object().shape({
  fullName: string().required("Full name is required"),
  email: string()
    .email("Invalid email address")
    .required("Email address is required"),
  phoneNumber: string().required("Phone number is required"),
  github: string().url("Invalid GitHub URL"),
  project: string().url("Invalid project URL"),
  linkedIn: string().url("Invalid LinkedIn URL"),
  objective: string().required("Objective is required"),
  experienceYears: number().required("Experience years is required"),
  professionalJourney: string().required("Professional journey is required"),
  collaborationTools: string().required("Collaboration tools is required"),
  dailyHours: number().required("Daily hours is required"),
  referralSource: string().required("Referral source is required"),
  availableDay: string().required("Available day is required"),
  paymentPhoneNumber: string().required("Payment phone number is required"),
  promoCode: string(),
  termsOfUse: boolean().oneOf([true], "Terms of use must be accepted"),
  qualifications: array().of(
    object().shape({
      qualification: string().required("Qualification is required"),
      experience: number().required("Experience is required"),
    })
  ),
  paymentMethod: string().required("Payment method is required"),
});

export default validationSchema;
