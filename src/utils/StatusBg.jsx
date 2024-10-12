export const StatusBg = (item) => {
  if (item === "Available") {
    return "bg-green-100";
  } else if (item === "Sold Out") {
    return "bg-red-100";
  } else if (item === "Limited Stock") {
    return "bg-yellow-100";
  } else if (item === "Sold") {
    return "bg-success";
  }
};
