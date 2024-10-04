import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const data = [
  { label: "Jan", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Feb", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Mar", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Apr", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "May", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Jun", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "jul", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Aug", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Sep", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Oct", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Nov", total: Math.floor(Math.random() * 3000) + 1000 },
  { label: "Dec", total: Math.floor(Math.random() * 3000) + 1000 },
];

const BarChart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"label"}
          tickLine={false}
          axisLine={false}
          stroke="#999999"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#999999"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
};

export default BarChart;
