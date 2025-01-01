"use client";
import { Card } from "@material-tailwind/react";
import { useState } from "react";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import useDataFetch from "@/app/hooks/useDataFetch";
import { getUserJoinStats } from "@/app/libs/overviewApi";

export default function UserJoinStats() {
  const [data, loading, error] = useDataFetch(getUserJoinStats, undefined);
  const [activeChart, setActiveChart] = useState("line");

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
              lineData={data?.userJoinData}
              XdataKey={"month"}
              LineDataKey={"TOTALJOIN"}
            />
          ) : (
            <BarChart
              barData={data?.userJoinData}
              XdataKey={"month"}
              BarDataKey={"TOTALJOIN"}
            />
          )}
        </div>
      </Card>
    </>
  );
}
