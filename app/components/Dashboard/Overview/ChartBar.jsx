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

export default function ChartBar() {
  const data = [
    {
      month: "JAN",
      Traffic: 913236,
    },
    {
      month: "FEB",
      Traffic: 323564,
    },
    {
      month: "MAR",
      Traffic: 453452,
    },
    {
      month: "APR",
      Traffic: 1945343,
    },
    {
      month: "MAY",
      Traffic: 644212,
    },
    {
      month: "JUN",
      Traffic: 1766412,
    },
    {
      month: "JUL",
      Traffic: 342355,
    },
    {
      month: "AUG",
      Traffic: 523543,
    },
    {
      month: "SEP",
      Traffic: 945344,
    },
    {
      month: "OCT",
      Traffic: 342355,
    },
    {
      month: "NOV",
      Traffic: 1345676,
    },
    {
      month: "DEC",
      Traffic: 1044534,
    },
  ];

  return (
    <Card className=" p-4 flex justify-center w-full h-full ">
      <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
        <h4 className=" text-sm text-fade_text font-medium ">
          Overall User Acquisition
        </h4>
        <select
          className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
          name="dropdown"
        >
          <option className=" p-3 " value="admin">
            Admin
          </option>
          <option className=" p-3 " value="provider">
            Provider
          </option>
          <option className=" p-3 " value="user">
            User
          </option>
        </select>
      </div>
      <div className=" w-full pt-4 h-full min-h-[250px] ">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            barSize={14}
          >
            <XAxis
              dataKey="month"
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
              dataKey="Traffic"
              fill="#526EF3"
              background={{ fill: "#F2F7FF", radius: 10 }}
              radius={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
