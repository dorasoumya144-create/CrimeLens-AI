const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

// Home Route
app.get("/", (req, res) => {
  res.send("🚔 CrimeLens AI Backend is Running!");
});

// Crime Data API
app.get("/api/crimes", (req, res) => {
  const crimes = [
    {
      id: 1,
      type: "Theft",
      location: "Rayagada",
      status: "Solved",
    },
    {
      id: 2,
      type: "Robbery",
      location: "Bhubaneswar",
      status: "Pending",
    },
    {
      id: 3,
      type: "Assault",
      location: "Cuttack",
      status: "Investigating",
    },
    {
      id: 4,
      type: "Burglary",
      location: "Berhampur",
      status: "Solved",
    },
    {
      id: 5,
      type: "Cyber Crime",
      location: "Sambalpur",
      status: "Under Investigation",
    },
  ];

  res.json(crimes);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});