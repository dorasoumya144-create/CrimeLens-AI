import { useEffect, useState } from "react";
import "./CrimeTable.css";

function CrimeTable() {
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/crimes")
      .then((response) => response.json())
      .then((data) => setCrimes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="crime-table">
      <h3>📋 Recent Crime Records</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Crime Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {crimes.length > 0 ? (
            crimes.map((crime) => (
              <tr key={crime.id}>
                <td>{crime.id}</td>
                <td>{crime.type}</td>
                <td>{crime.location}</td>
                <td>{crime.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No crime records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrimeTable;