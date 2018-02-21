export function isDaySleep(date) {
  date = date || new Date();
  const hours = date.getHours();
  return hours >= 6 && (hours < 17 || hours == 17 && date.getMinutes() < 30);
};
