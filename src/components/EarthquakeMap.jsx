import { MapContainer, TileLayer } from "react-leaflet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import MapBoundsUpdater from "./MapBoundsUpdater";
import EarthquakeMarker from "./EarthquakeMaker";
import MagnitudeLegend from "./MagnitudeLegend";
import "leaflet/dist/leaflet.css";

const EarthquakeMap = ({
  filteredEarthquakes,
  selectedMagnitude,
  onMagnitudeChange,
}) => {
  return (
    <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
      <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          Global Seismic Activity
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Click on markers for details
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <Tabs value={selectedMagnitude} onValueChange={onMagnitudeChange}>
          <TabsList className="mb-4 bg-slate-900 grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto h-auto">
            <TabsTrigger value="all" className="text-xs sm:text-sm px-2 py-2">
              All
            </TabsTrigger>
            <TabsTrigger value="major" className="text-xs sm:text-sm px-2 py-2">
              Major (5+)
            </TabsTrigger>
            <TabsTrigger
              value="moderate"
              className="text-xs sm:text-sm px-2 py-2"
            >
              Moderate (3-5)
            </TabsTrigger>
            <TabsTrigger value="minor" className="text-xs sm:text-sm px-2 py-2">
              Minor (&lt;3)
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedMagnitude} className="mt-0">
            <div className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden">
              <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapBoundsUpdater earthquakes={filteredEarthquakes} />
                {filteredEarthquakes.map((earthquake) => (
                  <EarthquakeMarker
                    key={earthquake.id}
                    earthquake={earthquake}
                  />
                ))}
              </MapContainer>
            </div>
          </TabsContent>
        </Tabs>

        <MagnitudeLegend />
      </CardContent>
    </Card>
  );
};

export default EarthquakeMap;
