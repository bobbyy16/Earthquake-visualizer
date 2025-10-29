import { useEffect, useCallback } from "react";
import { useEarthquakeStore } from "../store/earthquakeStore";
import { fetchEarthquakeData } from "../services/earthquakeApi";

export const useEarthquakeData = () => {
  const { setEarthquakes, setLoading, setError } = useEarthquakeStore();

  const loadEarthquakes = useCallback(async () => {
    setLoading(true);
    const result = await fetchEarthquakeData();

    if (result.success) {
      setEarthquakes(result.data);
    } else {
      setError(result.error);
    }
  }, [setEarthquakes, setLoading, setError]);

  useEffect(() => {
    loadEarthquakes();

    // Refresh every 5 minutes
    const interval = setInterval(loadEarthquakes, 300000);

    return () => clearInterval(interval);
  }, [loadEarthquakes]);

  return { loadEarthquakes };
};
