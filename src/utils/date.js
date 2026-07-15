const formatDate = (iso, options = { month: "short", day: "numeric", year: "numeric" }) =>
  new Intl.DateTimeFormat("en-US", options).format(new Date(iso));

export { formatDate };
