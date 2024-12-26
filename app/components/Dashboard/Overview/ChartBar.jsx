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
    <Card className=" p-4 flex justify-center ">
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
    </Card>
  );
}
