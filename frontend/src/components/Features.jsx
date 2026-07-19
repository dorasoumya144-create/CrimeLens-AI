import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Why Choose CrimeLens AI?</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>📊 Crime Analytics</h3>
          <p>Analyze crime trends using interactive charts and graphs.</p>
        </div>

        <div className="feature-card">
          <h3>🗺 Crime Hotspots</h3>
          <p>Visualize high-crime areas on an interactive map.</p>
        </div>

        <div className="feature-card">
          <h3>📈 Trend Prediction</h3>
          <p>Forecast future crime rates using Machine Learning.</p>
        </div>

        <div className="feature-card">
          <h3>🤖 AI Insights</h3>
          <p>Receive AI-generated insights from historical crime data.</p>
        </div>

        <div className="feature-card">
          <h3>🚨 Crime Alerts</h3>
          <p>Identify emerging crime patterns and potential risks.</p>
        </div>

        <div className="feature-card">
          <h3>📂 Dataset Management</h3>
          <p>Upload and manage crime datasets for analysis.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;