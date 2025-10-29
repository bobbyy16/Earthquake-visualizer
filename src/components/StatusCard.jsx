// import { Icon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const StatsCard = ({ title, value, color }) => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
          {/* <Icon className={`w-8 h-8 ${color}`} /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
