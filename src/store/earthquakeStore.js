import { create } from "zustand";

export const useEarthquakeStore = create((set) => ({
  earthquakes: [],
  loading: true,
  error: null,
  selectedMagnitude: "all",

  setEarthquakes: (earthquakes) => set({ earthquakes, loading: false }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error, loading: false }),
  setSelectedMagnitude: (magnitude) => set({ selectedMagnitude: magnitude }),

  getFilteredEarthquakes: (state) => {
    const { earthquakes, selectedMagnitude } = state;
    return earthquakes.filter((eq) => {
      const mag = eq.properties.mag;
      if (selectedMagnitude === "all") return true;
      if (selectedMagnitude === "major") return mag >= 5;
      if (selectedMagnitude === "moderate") return mag >= 3 && mag < 5;
      if (selectedMagnitude === "minor") return mag < 3;
      return true;
    });
  },

  getStats: (state) => ({
    total: state.earthquakes.length,
    major: state.earthquakes.filter((eq) => eq.properties.mag >= 5).length,
    moderate: state.earthquakes.filter(
      (eq) => eq.properties.mag >= 3 && eq.properties.mag < 5
    ).length,
    minor: state.earthquakes.filter((eq) => eq.properties.mag < 3).length,
  }),
}));
