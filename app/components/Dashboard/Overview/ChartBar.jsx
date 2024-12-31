"use client";
import { getSalesOverView } from "@/app/libs/overviewApi";
import { Card } from "@material-tailwind/react";
import useDataFetch from "@/app/hooks/useDataFetch";
import { useState } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function ChartBar() {
  const [data, loading, error] = useDataFetch(getSalesOverView, undefined);
  const [activeChart, setActiveChart] = useState("bar");

  return (
    <Card className=" p-4 flex justify-center w-full h-full">
      <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
        <h4 className=" text-sm text-fade_text font-medium ">Sales Overview</h4>
        <select
          onChange={(e) => setActiveChart(e.target.value)}
          className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
          name="dropdown"
        >
          <option className=" p-3 " value="line">
            Lines
          </option>
          <option selected className="p-3" value="bar">
            Bars
          </option>
        </select>
      </div>
      <div className=" w-full pt-4 h-full min-h-[230px] ">
        {!loading && activeChart === "line" ? (
          <LineChart
            lineData={data?.salesOverview && data.salesOverview}
            XdataKey={"month"}
            LineDataKey={"TOTALSELLS"}
          />
        ) : (
          <BarChart
            barData={data?.salesOverview && data.salesOverview}
            XdataKey={"month"}
            BarDataKey={"TOTALSELLS"}
          />
        )}
      </div>
    </Card>
  );
}
