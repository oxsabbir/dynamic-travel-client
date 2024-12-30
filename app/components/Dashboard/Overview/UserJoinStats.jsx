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
      </Card>
    </>
  );
}
