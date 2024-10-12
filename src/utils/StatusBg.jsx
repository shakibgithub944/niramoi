export const StatusBg = (item) => {
  if (item === "Available") {
    return "#F1F6FF";
  } else if (item === "Sold Out") {
    return "#FFEBEE";
  } else if (item === "Limited Stock") {
    return "#FFF3E0";
  } else if (item === "Sold") {
    return "#F1F6FF";
  } else {
    return "#F1F6FF";
  }
};
