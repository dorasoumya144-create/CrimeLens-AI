import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", crimes: 120 },
  { month: "Feb", crimes: 180 },
  { month: "Mar", crimes: 150 },
  { month: "Apr", crimes: 220 },
  { month: "May", crimes: 280 },
  { month: "Jun", crimes: 260 },
];

function CrimeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke="#cbd5e1" />
        <YAxis stroke="#cbd5e1" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="crimes"
          stroke="#38bdf8"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CrimeChart;