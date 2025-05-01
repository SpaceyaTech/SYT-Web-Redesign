const qualificationsForm = [
  {
    id: "objective",
    question: "What is your objective for joining the Mastercraft program?",
    options: [
      { value: "", label: "--" },
      { value: "objective-1", label: "I want to enhance my technical skills" },
      {
        value: "objective-2",
        label: "I want to get work experience to land tech roles",
      },
      {
        value: "objective-3",
        label:
          "I am interested in working in a team of peers and other techies",
      },
      { value: "objective-4", label: "I want to learn how to code or design" },
    ],
  },
  {
    id: "experienceYears",
    question: "How many years of experience do you have in your field?",
    options: [
      { value: "", label: "--" },
      { value: "experience-1", label: "Less than a year" },
      { value: "experience-2", label: "2-3 years" },
      { value: "experience-3", label: "4-6 years" },
      { value: "experience-4", label: "More than 6 years" },
    ],
  },
  {
    id: "professionalJourney",
    question:
      "Which of the following have you completed as part of your professional or learning journey?",
    options: [
      { value: "", label: "--" },
      {
        value: "journey-1",
        label:
          "I currently have a role in industry and is looking to advance my skills",
      },
      { value: "journey-2", label: "I have at least one portfolio project" },
      {
        value: "journey-3",
        label: "I have a working product that I have founded",
      },
      {
        value: "journey-4",
        label:
          "I have no experience building projects but I know the basics of my tech stack",
      },
    ],
  },
  {
    id: "collaborationTools",
    question:
      "How familiar are you with collaboration tools commonly used in development teams? (Git, Figma, Jira, Trello and Slack)?",
    options: [
      { value: "", label: "--" },
      {
        value: "tools-1",
        label:
          "I have no experience working with version control tools but I want to learn",
      },
      {
        value: "tools-2",
        label:
          "I have a basic understanding of how to use version control tools",
      },
      {
        value: "tools-3",
        label:
          "I am comfortable with version control tools but want to learn more",
      },
      {
        value: "tools-4",
        label: "I have working experience with version control tools",
      },
    ],
  },
  {
    id: "dailyHours",
    question: "How many hours in a day can you allocate to this program?",
    options: [
      { value: "", label: "--" },
      { value: "hours-1", label: "Less than 2 hours a day" },
      { value: "hours-2", label: "2-4 hours a day" },
      { value: "hours-3", label: "4-8 hours a day" },
      { value: "hours-4", label: "More than 8 hours a day" },
    ],
  },
  {
    id: "referralSource",
    question: "How did you hear about us?",
    options: [
      { value: "", label: "--" },
      { value: "referral-1", label: "Twitter (X)" },
      { value: "referral-2", label: "LinkedIn" },
      { value: "referral-3", label: "Through a friend" },
      { value: "referral-4", label: "At a SpaceYaTech event" },
    ],
  },
  {
    id: "availableDay",
    question: "Which day of the week are you available for an online stand-up?",
    options: [
      { value: "", label: "--" },
      { value: "day-1", label: "Mondays" },
      { value: "day-2", label: "Tuesdays" },
      { value: "day-3", label: "Wednesdays" },
      { value: "day-4", label: "Thursdays" },
      { value: "day-5", label: "Fridays" },
    ],
  },
];

function Qualifications({ formData, handleInputChange }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-[#2E2E2E]">Qualifications</h3>

      {qualificationsForm.map(({ id, question, options }) => (
        <div className="flex flex-col gap-3" key={id}>
          <label htmlFor="fullName" className="text-sm">
            {question}{" "}
          </label>
          <select
            id={id}
            name={id}
            value={formData[id] || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
            className="border border-[#E5E5E5] bg-[#F4F4F5] rounded-md py-2 px-3 text-sm outline-none text-[#A3A3A3]"
          >
            {options.map(({ value, label }) => (
              <option key={value} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
export default Qualifications;
