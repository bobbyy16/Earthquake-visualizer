import React from "react";
import { Activity, AlertTriangle } from "lucide-react";
import StatsCard from "./StatusCard";

const StatsDashboard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatsCard
        title="Total Events"
        value={stats.total}
        icon={Activity}
        color="text-blue-400"
      />
      <StatsCard
        title="Major (5+)"
        value={stats.major}
        icon={AlertTriangle}
        color="text-red-400"
      />
      <StatsCard
        title="Moderate (3-5)"
        value={stats.moderate}
        icon={Activity}
        color="text-orange-400"
      />
      <StatsCard
        title="Minor (<3)"
        value={stats.minor}
        icon={Activity}
        color="text-green-400"
      />
    </div>
  );
};

export default StatsDashboard;
