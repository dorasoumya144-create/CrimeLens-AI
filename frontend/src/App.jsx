import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="container">
        <h1>🚔 CrimeLens AI</h1>

        <h2>AI Powered Crime Analytics Dashboard</h2>

        <p>
          Analyze crime trends, visualize hotspots, and predict future crime
          patterns using Artificial Intelligence.
        </p>

        <div className="buttons">
          <button className="primary-btn">Explore Dashboard</button>
          <button className="secondary-btn">View Analytics</button>
        </div>

        <div className="stats">
          <div className="card">
            <h3>250K+</h3>
            <p>Crime Records</p>
          </div>

          <div className="card">
            <h3>500+</h3>
            <p>Crime Hotspots</p>
          </div>

          <div className="card">
            <h3>92%</h3>
            <p>Prediction Accuracy</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Dashboard Section */}
      <Dashboard />
    </>
  );
}

export default App;