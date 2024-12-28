"use client";
import { getSalesOverView } from "@/app/libs/overviewApi";
import { Card } from "@material-tailwind/react";
import useDataFetch from "@/app/hooks/useDataFetch";

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
  const [data, loading, error] = useDataFetch(getSalesOverView, undefined);

  return (
    <Card className=" p-4 flex justify-center w-full h-full ">
      <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
        <h4 className=" text-sm text-fade_text font-medium ">Sales Overview</h4>
      </div>
      <div className=" w-full pt-4 h-full min-h-[250px] ">
        {!loading && (
          <ResponsiveContainer>
            <BarChart
              data={data?.salesOverview && data.salesOverview}
              margin={{
                top: 15,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              barSize={16}
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
                dataKey="TOTALSELLS"
                fill="#526EF3"
                background={{ fill: "#F2F7FF", radius: 10 }}
                radius={10}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
}
