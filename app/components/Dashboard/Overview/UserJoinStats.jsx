"use client";
import { Card } from "@material-tailwind/react";
import { useState } from "react";

import BarChart from "./BarChart";
import LineChart from "./LineChart";

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
  console.log(activeChart);

  return (
    <>
      <Card className=" p-4 flex justify-center h-full ">
        <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
          <h4 className=" text-sm text-fade_text font-medium ">
            Overall User Activity
          </h4>
          <select
            onChange={(e) => setActiveChart(e.target.value)}
            className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
            name="dropdown"
          >
            <option selected className="p-3 " value="line">
              Lines
            </option>
            <option className="p-3 " value="Bar">
              Bars
            </option>
          </select>
        </div>
        <div className=" h-full min-h-[230px]  p-4">
          {activeChart === "line" ? (
            <LineChart
              lineData={carData}
              XdataKey={"month"}
              LineDataKey={"Traffic"}
            />
          ) : (
            <BarChart
              barData={carData}
              XdataKey={"month"}
              BarDataKey={"Traffic"}
            />
          )}
        </div>
      </Card>
    </>
  );
}
