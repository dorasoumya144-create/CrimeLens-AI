import "./Dashboard.css";
import CrimeChart from "../charts/CrimeChart";
import CrimeTable from "../tables/CrimeTable";
import CrimeMap from "../maps/CrimeMap";
import Filters from "../components/Filters";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <section className="dashboard">
      <h2 className="dashboard-title">Crime Analytics Dashboard</h2>
<Filters />
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>250K+</h3>
          <p>Total Crimes</p>
        </div>

        <div className="dashboard-card">
          <h3>180K+</h3>
          <p>Solved Cases</p>
        </div>

        <div className="dashboard-card">
          <h3>500+</h3>
          <p>Crime Hotspots</p>
        </div>

        <div className="dashboard-card">
          <h3>92%</h3>
          <p>Prediction Accuracy</p>
        </div>
      </div>

      <div className="chart-box">
        <h3>📈 Crime Trend Analysis</h3>
        <CrimeChart />
      </div>

      <div className="map-box">
  <h3>🗺️ Crime Hotspot Map</h3>
  <CrimeMap />
</div>

      <div className="prediction-box">
        <h3>🤖 AI Prediction</h3>
        <p>Machine Learning prediction results will appear here.</p>
      </div>

      <CrimeTable />
    </section>
  );
}

export default Dashboard;