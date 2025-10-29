export const getMagnitudeColor = (magnitude) => {
  if (magnitude >= 6) return "#dc2626";
  if (magnitude >= 5) return "#ea580c";
  if (magnitude >= 4) return "#f59e0b";
  if (magnitude >= 3) return "#eab308";
  if (magnitude >= 2) return "#84cc16";
  return "#22c55e";
};

export const getMagnitudeSize = (magnitude) => {
  return Math.max(5, magnitude * 3);
};

export const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

export const MAGNITUDE_LEGEND = [
  { color: "#dc2626", label: "6.0+", range: "6.0+" },
  { color: "#ea580c", label: "5.0-5.9", range: "5.0-5.9" },
  { color: "#f59e0b", label: "4.0-4.9", range: "4.0-4.9" },
  { color: "#eab308", label: "3.0-3.9", range: "3.0-3.9" },
  { color: "#84cc16", label: "2.0-2.9", range: "2.0-2.9" },
  { color: "#22c55e", label: "<2.0", range: "<2.0" },
];
