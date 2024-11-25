export function splitDate(date: string) {
  let obj = date.split("T");
  return obj[0];
}

export function formatTime(timeString: any) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

export function splitDateTime(date: string) {
  let obj = date.split("T");
  let res = formatTime(obj[1]);
  return res;
}
