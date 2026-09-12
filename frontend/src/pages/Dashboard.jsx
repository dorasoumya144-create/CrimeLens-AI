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
  <h3>🤖 AI Crime Prediction</h3>

  <div className="prediction-card">
    <h4>Prediction for Next Month</h4>

    <p>🔺 Theft Cases: <strong>+12%</strong></p>

    <p>🔻  Robbery Cases: <strong>-5%</strong></p>

    <p>🔺 Assault Cases: <strong>+3%</strong></p>

    <p>⚠️ High Risk District: <strong>Bhubaneswar</strong></p>

    <button>Generate Prediction</button>
  </div>
</div>
      <CrimeTable />
    </section>
  );
}

export default Dashboard;