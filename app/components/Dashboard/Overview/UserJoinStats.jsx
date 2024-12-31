"use client";
import { Card } from "@material-tailwind/react";
import {
  XAxis,
  YAxis,
  LineChart,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";

export default function UserJoinStats() {
  const carData = [
    {
      month: "JAN",
      Traffic: 124236,
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
      Traffic: 145676,
    },
    {
      month: "DEC",
      Traffic: 14534,
    },
  ];

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

  const [activeChart, setActiveChart] = useState("line");

  return (
    <>
      <Card className=" p-4 flex justify-center h-full ">
        <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
          <h4 className=" text-sm text-fade_text font-medium ">
            Overall User Activity
          </h4>
          <select
            className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
            name="dropdown"
          >
            <option selected className=" p-3 " value="admin">
              Lines
            </option>
            <option className=" p-3 " value="provider">
              Bars
            </option>
          </select>
        </div>
        <div className=" h-full min-h-[230px]  p-4">
          <ResponsiveContainer>
            <LineChart
              data={carData}
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
        </div>
      </Card>
    </>
  );
}
