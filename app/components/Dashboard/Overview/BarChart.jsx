import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChart({ barData, XdataKey, BarDataKey }) {
  const CustomizedYAxisTick = (props) => {
    const { x, y, payload } = props;
    const value = payload.value / 1000; // convert to 'k'

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={0}
          textAnchor="end"
          fontSize={13}
          fontWeight={500}
          fill="#666"
        >
          {value}k
        </text>
      </g>
    );
  };

  return (
    <>
      <ResponsiveContainer>
        <Chart
          data={barData}
          margin={{
            top: 15,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          barSize={16}
        >
          <XAxis
            dataKey={XdataKey}
            scale="point"
            padding={{ left: 30, right: 10 }}
            axisLine={false}
            tickLine={false}
            fontSize={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={<CustomizedYAxisTick />}
            fontSize={12}
          />
          <Tooltip />
          <Bar
            dataKey={BarDataKey}
            fill="#526EF3"
            background={{ fill: "#F2F7FF", radius: 10 }}
            radius={10}
          />
        </Chart>
      </ResponsiveContainer>
    </>
  );
}
