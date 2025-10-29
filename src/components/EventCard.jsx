import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";
import { getMagnitudeColor, formatTime } from "../utils/earthquakeUtils";

const EventCard = ({ earthquake }) => {
  const { mag, place, time } = earthquake.properties;

  return (
    <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <Badge
          style={{ backgroundColor: getMagnitudeColor(mag) }}
          className="text-white"
        >
          M {mag.toFixed(1)}
        </Badge>
        <span className="text-xs text-slate-400">
          {new Date(time).toLocaleTimeString()}
        </span>
      </div>
      <p className="text-sm mb-2 line-clamp-2">{place}</p>
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Clock className="w-3 h-3" />
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
};

export default EventCard;
