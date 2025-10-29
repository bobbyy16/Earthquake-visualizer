import React from "react";
import { MAGNITUDE_LEGEND } from "../utils/earthquakeUtils";

const MagnitudeLegend = () => {
  return (
    <div className="mt-4 p-4 bg-slate-900 rounded-lg">
      <p className="text-sm font-semibold mb-2">Magnitude Scale</p>
      <div className="flex flex-wrap gap-3">
        {MAGNITUDE_LEGEND.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagnitudeLegend;
