import React from "react";
import { Card, CardContent } from "./ui/card";
import { Activity } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <Card className="w-64">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4">
            <Activity className="w-12 h-12 animate-pulse text-blue-500" />
            <p className="text-sm text-muted-foreground">
              Loading earthquake data...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingScreen;
