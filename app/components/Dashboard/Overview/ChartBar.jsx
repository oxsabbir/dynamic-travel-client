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

const data = [
  {
    name: "Aug 12",
    Traffic: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug 13",
    Traffic: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Aug 14",
    Traffic: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Aug 15",
    Traffic: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Aug 16",
    Traffic: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Aug 17",
    Traffic: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug 18",
    Traffic: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ChartBar() {
  return (
    <>
      <div className=" flex justify-between flex-col p-5">
        <div className=" flex justify-between items-center">
          <h4 className=" text-sm">New Audiences</h4>
          <Button
            variant="outlined"
            className=" text-[10px] rounded-full normal-case gap-1 justify-center py-0.5 text-[#4C49F1] border-[#4C49F1] px-3 flex items-center"
          >
            View Reports
            <ChevronDown className=" h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
