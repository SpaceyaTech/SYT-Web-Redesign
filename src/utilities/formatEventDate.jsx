/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
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

export function startEventDate(startDate) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, monthNum, day] = startDate.split("-");
  const month = monthNames[parseInt(monthNum, 10) - 1];
  return [month, day];
}

export function formatEventTime(event) {
  const startDate = new Date(`${event.start_date}T${event.start_time}`);
  const endDate = new Date(`${event.end_date}T${event.end_time}`);

  const formattedEndDate = endDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  const startTime = startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const endTime = endDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${startTime} - ${endTime}`;
  }
  return `${startTime} - ${formattedEndDate}, ${endTime}`;
}

export function calculateDistanceToDate(targetDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const target = new Date(targetDate);
  const today = new Date();
  const diffDays = Math.round(Math.abs((target - today) / oneDay));

  switch (true) {
    case diffDays === 1:
      return "1 day away";
    case diffDays < 7:
      return `${diffDays} days away`;
    case diffDays < 14:
      return "1 week away";
    case diffDays < 30:
      return `${Math.floor(diffDays / 7)} weeks away`;
    default:
      // eslint-disable-next-line no-case-declarations
      const diffMonths = target.getMonth() - today.getMonth();
      // eslint-disable-next-line no-unused-expressions
      12 * (target.getFullYear() - today.getFullYear());
      if (diffMonths === 1) {
        return "1 month away";
      }
      return `${diffMonths} months away`;
  }
}
