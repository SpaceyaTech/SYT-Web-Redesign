const options = [
  "Artificial Intelligence",
  "Blockchain",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "Cyber Security",
  "Data Analysis",
  "Database Management",
  "Machine Learning",
  "Natural Language Processing",
  "Neural Networks",
  "Software Engineering",
  "System Administration",
  "Robotics",
  "Augmented Reality",
  "Virtual Reality",
  "Game Development",
  "Internet of Things",
  "Graphic Design",
  "UI/UX Design",
  "Networking",
  "Operating Systems",
  "Quantum Computing",
  "DevOps",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Embedded Systems",
  "Big Data",
];

const selectFields = [
  {
    label: "What would best describe your work?",
    id: "work",
    name: "work",
    options,
  },
  {
    label: "What would best describe your interest?",
    id: "field_of_interest",
    name: "field_of_interest",
    options,
  },
];

function JoinSytSelectFields() {
  return (
    <>
      {selectFields.map((field) => (
        <label
          key={field.id}
          htmlFor={field.id}
          className="text-sm font-medium flex flex-col gap-1.5"
        >
          {field.label}
          <select
            name={field.name}
            id={field.id}
            required
            className="px-3 py-2.5 outline-none border rounded-md text-sm"
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </>
  );
}

export default JoinSytSelectFields;
