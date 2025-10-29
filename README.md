# Earthquake Visualizer 🌍

A real-time earthquake monitoring dashboard built with React that visualizes global seismic activity using data from the USGS Earthquake API. Track earthquakes worldwide with an interactive map, detailed statistics, and recent event listings.

## ✨ Features

- **Real-time Data**: Automatically fetches earthquake data from USGS every 5 minutes
- **Interactive Map**: View earthquakes on an interactive global map with color-coded markers based on magnitude
- **Magnitude Filtering**: Filter earthquakes by severity (All, Major 5+, Moderate 3-5, Minor <3)
- **Live Statistics**: Dashboard showing total events and breakdown by magnitude category
- **Recent Events Feed**: Scrollable list of the 20 most recent earthquakes with detailed information
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Dark Theme**: Modern dark theme optimized for extended viewing

## 🚀 Demo

Visit the live demo: [Your Demo Link Here]

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Zustand** - State management
- **React Leaflet** - Interactive maps
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **USGS Earthquake API** - Real-time earthquake data

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/bobbyy16/Earthquake-visualizer.git
cd Earthquake-visualizer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── EarthquakeMap.jsx
│   ├── EarthquakeMarker.jsx
│   ├── RecentEvents.jsx
│   ├── StatsDashboard.jsx
│   ├── ErrorAlert.jsx
│   ├── LoadingScreen.jsx
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
│   ├── useEarthquakeData.js
│   ├── useFilteredEarthquakes.js
│   └── useEarthquakeStats.js
├── store/              # Zustand store
│   └── earthquakeStore.js
├── services/           # API services
│   └── earthquakeApi.js
├── utils/              # Utility functions
│   └── earthquakeUtils.js
└── App.jsx            # Main application component
```

## 🎯 Key Components

### EarthquakeMap

Interactive map component displaying earthquake locations with color-coded markers based on magnitude. Includes filtering tabs and auto-zoom to fit all visible earthquakes.

### StatsDashboard

Real-time statistics dashboard showing:

- Total earthquake events
- Major earthquakes (magnitude 5+)
- Moderate earthquakes (magnitude 3-5)
- Minor earthquakes (magnitude <3)

### RecentEvents

Scrollable feed of the 20 most recent earthquakes with detailed information including magnitude, location, depth, and time.

## 🎨 Magnitude Scale

| Magnitude | Color          | Description            |
| --------- | -------------- | ---------------------- |
| 6.0+      | 🔴 Red         | Major earthquakes      |
| 5.0-5.9   | 🟠 Orange      | Strong earthquakes     |
| 4.0-4.9   | 🟡 Amber       | Light earthquakes      |
| 3.0-3.9   | 🟡 Yellow      | Minor earthquakes      |
| 2.0-2.9   | 🟢 Light Green | Micro earthquakes      |
| <2.0      | 🟢 Green       | Very minor earthquakes |

## 🔧 Configuration

The app fetches data from the USGS Earthquake API. To modify the data source or parameters, edit `src/services/earthquakeApi.js`:

```javascript
const USGS_API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
```

Available endpoints:

- `all_day.geojson` - All earthquakes in the past 24 hours
- `all_week.geojson` - All earthquakes in the past 7 days
- `all_month.geojson` - All earthquakes in the past 30 days

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/) for providing the earthquake data API
- [Leaflet](https://leafletjs.com/) for the mapping library
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles

## 📧 Contact

Abhishek - [@bobbyy16](https://github.com/bobbyy16)

Project Link: [https://github.com/bobbyy16/Earthquake-visualizer](https://github.com/bobbyy16/Earthquake-visualizer)

---

Made with ❤️ by Abhishek
