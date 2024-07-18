import { format, endOfWeek, add, sub } from "date-fns";

// Helper function for filtering dates below
const updateStateOnTime = (date1, date2) => {
  return (
    format(date1, "yyyy-MM-dd").toString() +
    "," +
    format(date2, "yyyy-MM-dd").toString()
  );
};

const filterRecentTime = (times) => {
  const today = new Date();

  switch (times) {
    case "today":
      return updateStateOnTime(today, today);
      break;
    case "thisweek":
      // Fetch from today to the last day of the week
      return updateStateOnTime(today, endOfWeek(today, { weekStartsOn: 1 }));
      break;
    case "weekend":
      // For weekdays, fetch last day and previous of the last day
      if (today.getDay() < 5) {
        const lastDay = endOfWeek(today, { weekStartsOn: 1 });
        return updateStateOnTime(sub(lastDay, { days: 1 }), lastDay);
        // If it's saturday, fetch for that day and the following day
      } else if (today.getDay() === 5) {
        return updateStateOnTime(today, endOfWeek(today, { weekStartsOn: 1 }));
      } else {
        // If it's sunday, fetch for that day
        return updateStateOnTime(today, today);
      }
      break;
    case "recent":
      // Fetch for next 30 days
      return updateStateOnTime(today, add(today, { days: 30 }));
      break;
    default:
      // Fetch for next 90 days
      return updateStateOnTime(today, add(today, { days: 90 }));
      break;
  }
};

export default filterRecentTime;
