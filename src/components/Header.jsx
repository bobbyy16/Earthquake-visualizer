import { Activity } from "lucide-react";

const Header = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <Activity className="w-8 h-8 text-blue-400" />
        <h1 className="text-3xl font-bold">Earthquake Visualizer</h1>
      </div>
      <p className="text-slate-400">
        Real-time seismic activity from the past 24 hours
      </p>
    </div>
  );
};

export default Header;
