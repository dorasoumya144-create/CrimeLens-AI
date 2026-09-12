import "./Filters.css";

function Filters() {
  return (
    <div className="filters">
      <select>
        <option>Odisha</option>
        <option>Andhra Pradesh</option>
        <option>Telangana</option>
        <option>West Bengal</option>
      </select>

      <select>
        <option>All Crimes</option>
        <option>Theft</option>
        <option>Robbery</option>
        <option>Murder</option>
        <option>Assault</option>
      </select>

      <select>
        <option>2026</option>
        <option>2025</option>
        <option>2024</option>
      </select>

      <button>Search</button>
    </div>
  );
}

export default Filters;