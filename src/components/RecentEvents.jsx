import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import EventCard from "./EventCard";

const RecentEvents = ({ earthquakes }) => {
  const sortedEarthquakes = [...earthquakes]
    .sort((a, b) => b.properties.time - a.properties.time)
    .slice(0, 20);

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle>Recent Events</CardTitle>
        <CardDescription>Showing {earthquakes.length} events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {sortedEarthquakes.map((earthquake) => (
            <EventCard key={earthquake.id} earthquake={earthquake} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentEvents;
