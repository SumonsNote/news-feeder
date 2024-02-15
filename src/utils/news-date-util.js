export function newsDateFormat(dateString) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const publishDate = new Date(dateString);
  return publishDate.toLocaleDateString("en-US", options);
}
