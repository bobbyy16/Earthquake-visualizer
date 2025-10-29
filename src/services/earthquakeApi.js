const USGS_API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export const fetchEarthquakeData = async () => {
  try {
    const response = await fetch(USGS_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data.features,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Failed to fetch earthquake data",
    };
  }
};
