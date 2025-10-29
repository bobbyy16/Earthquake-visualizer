import { useEarthquakeStore } from "../store/earthquakeStore";
import { useMemo } from "react";

export function useFilteredEarthquakes() {
  const earthquakes = useEarthquakeStore((s) => s.earthquakes);
  const selectedMagnitude = useEarthquakeStore((s) => s.selectedMagnitude);

  return useMemo(() => {
    return earthquakes.filter((eq) => {
      const mag = eq.properties.mag;
      if (selectedMagnitude === "all") return true;
      if (selectedMagnitude === "major") return mag >= 5;
      if (selectedMagnitude === "moderate") return mag >= 3 && mag < 5;
      if (selectedMagnitude === "minor") return mag < 3;
      return true;
    });
  }, [earthquakes, selectedMagnitude]);
}
