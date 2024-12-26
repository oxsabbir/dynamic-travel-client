"use client";
import { Card } from "@material-tailwind/react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

export default function AquisitionChart() {
  return (
    <Card className=" p-4 flex justify-center ">
      <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
        <h4 className=" text-sm text-fade_text font-medium ">
          Overall User Acquisition
        </h4>
      </div>
    </Card>
  );
}
