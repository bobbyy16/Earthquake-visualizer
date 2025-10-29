import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapBoundsUpdater = ({ earthquakes }) => {
  const map = useMap();

  useEffect(() => {
    if (earthquakes.length > 0) {
      const bounds = earthquakes.map((eq) => [
        eq.geometry.coordinates[1],
        eq.geometry.coordinates[0],
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [earthquakes, map]);

  return null;
};

export default MapBoundsUpdater;
