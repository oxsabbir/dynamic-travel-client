import {
  XAxis,
  YAxis,
  LineChart,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function LineChart({ lineData }) {
  const CustomizedYAxisTick = (props) => {
    const { x, y, payload } = props;
    const value =
      payload.value < 1000 ? payload.value : `${payload.value / 1000}k`; // convert to 'k'

    return (
      <g transform={`translate(${x},${y})`}>
        <text textAnchor="end" fontSize={13} fill="#666">
          {value}
        </text>
      </g>
    );
  };

  return (
    <>
      <ResponsiveContainer>
        <LineChart
          data={lineData}
          margin={{
            top: 15,
            right: 18,
            left: -10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="month"
            fontSize={12}
            fontWeight={500}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={<CustomizedYAxisTick />}
          />

          <defs>
            <linearGradient id="linear" x1="1" y1="0" x2="0" y2="0">
              <stop offset="10%" stopColor="#1B59F8" stopOpacity={1} />
              <stop offset="100%" stopColor="#4673E7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Traffic"
            // stroke="#526EF3"
            stroke="url(#linear)"
            strokeWidth={9}
            dot={false}
            strokeLinecap="round"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
