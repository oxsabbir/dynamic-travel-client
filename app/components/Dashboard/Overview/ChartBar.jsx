import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart } from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ChartBar() {
  return (
    <>
      <div className=" flex justify-between flex-col p-5">
        <div className=" flex justify-between items-center">
          <h4 className=" text-sm">New Audiences</h4>
        </div>
      </div>
    </>
  );
}
