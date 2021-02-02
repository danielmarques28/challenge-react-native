export function normalizeDate(date) {
  date = new Date(date);
  return date.toLocaleDateString();
}
