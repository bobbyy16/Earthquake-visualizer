import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import EarthquakeMap from "./components/EarthQuakeMap";
import RecentEvents from "./components/RecentEvents.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ErrorAlert from "./components/ErrorAlert.jsx";
import StatsDashboard from "./components/StatusDashboard.jsx";
import { useEarthquakeData } from "./hooks/useEarthquakeData";
import { useEarthquakeStore } from "./store/earthquakeStore";
import { useFilteredEarthquakes } from "./hooks/useFilteredEarthquakes";
import { useEarthquakeStats } from "./hooks/usEarthquakeStats";

function App() {
  // Kick off data loading and refresh
  useEarthquakeData();

  const loading = useEarthquakeStore((s) => s.loading);
  const error = useEarthquakeStore((s) => s.error);
  const selectedMagnitude = useEarthquakeStore((s) => s.selectedMagnitude);
  const setSelectedMagnitude = useEarthquakeStore(
    (s) => s.setSelectedMagnitude
  );

  // derived selectors (use hooks to memoize snapshots)
  const filteredEarthquakes = useFilteredEarthquakes();
  const stats = useEarthquakeStats();

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        {error && <ErrorAlert message={error} />}

        <StatsDashboard stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <EarthquakeMap
            filteredEarthquakes={filteredEarthquakes}
            selectedMagnitude={selectedMagnitude}
            onMagnitudeChange={(val) => setSelectedMagnitude(val)}
          />

          <RecentEvents earthquakes={filteredEarthquakes} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
