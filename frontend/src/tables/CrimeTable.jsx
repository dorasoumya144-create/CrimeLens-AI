function CrimeTable() {
  const crimes = [
    {
      id: 101,
      type: "Theft",
      location: "Rayagada",
      status: "Solved",
    },
    {
      id: 102,
      type: "Robbery",
      location: "Bhubaneswar",
      status: "Pending",
    },
    {
      id: 103,
      type: "Assault",
      location: "Cuttack",
      status: "Investigating",
    },
    {
      id: 104,
      type: "Burglary",
      location: "Berhampur",
      status: "Solved",
    },
  ];

  return (
    <div className="crime-table">
      <h3>Recent Crime Records</h3>

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
          {crimes.map((crime) => (
            <tr key={crime.id}>
              <td>{crime.id}</td>
              <td>{crime.type}</td>
              <td>{crime.location}</td>
              <td>{crime.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrimeTable;