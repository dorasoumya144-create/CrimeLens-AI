function StatsCard({ number, title }) {
  return (
    <div className="dashboard-card">
      <h3>{number}</h3>
      <p>{title}</p>
    </div>
  );
}

export default StatsCard;