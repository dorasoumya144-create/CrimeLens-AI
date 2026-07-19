import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚔 <span>CrimeLens AI</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Prediction</li>
        <li>About</li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;