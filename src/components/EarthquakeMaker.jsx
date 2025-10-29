import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import {
  getMagnitudeColor,
  getMagnitudeSize,
  formatTime,
} from "../utils/earthquakeUtils";

const EarthquakeMarker = ({ earthquake }) => {
  const [lng, lat, depth] = earthquake.geometry.coordinates;
  const { mag, place, time } = earthquake.properties;

  return (
    <CircleMarker
      center={[lat, lng]}
      radius={getMagnitudeSize(mag)}
      fillColor={getMagnitudeColor(mag)}
      color="#fff"
      weight={1}
      opacity={0.8}
      fillOpacity={0.6}
    >
      <Popup>
        <div className="text-slate-900">
          <h3 className="font-bold text-lg mb-2">Magnitude {mag.toFixed(1)}</h3>
          <p className="text-sm mb-1">
            <strong>Location:</strong> {place}
          </p>
          <p className="text-sm mb-1">
            <strong>Depth:</strong> {depth.toFixed(1)} km
          </p>
          <p className="text-sm">
            <strong>Time:</strong> {formatTime(time)}
          </p>
        </div>
      </Popup>
    </CircleMarker>
  );
};

export default EarthquakeMarker;
