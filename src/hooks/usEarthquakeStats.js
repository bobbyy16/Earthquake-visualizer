import { useEarthquakeStore } from "../store/earthquakeStore";
import { useMemo } from "react";
export function useEarthquakeStats() {
  const earthquakes = useEarthquakeStore((s) => s.earthquakes);
  return useMemo(
    () => ({
      total: earthquakes.length,
      major: earthquakes.filter((eq) => eq.properties.mag >= 5).length,
      moderate: earthquakes.filter(
        (eq) => eq.properties.mag >= 3 && eq.properties.mag < 5
      ).length,
      minor: earthquakes.filter((eq) => eq.properties.mag < 3).length,
    }),
    [earthquakes]
  );
}
