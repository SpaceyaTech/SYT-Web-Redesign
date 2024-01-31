export default function formatEventDates(
  start_date,
  start_time,
  end_date,
  end_time
) {
  const startDate = new Date(`${start_date}T${start_time}`);
  const endDate = new Date(`${end_date}T${end_time}`);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-GB", options);

  const formattedStartDate = formatter.format(startDate).replace(/\//g, "-");
  const formattedEndDate = formatter.format(endDate).replace(/\//g, "-");

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${formattedStartDate} - ${endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })}`;
  }
  return `${formattedStartDate} - ${formattedEndDate}`;
}
