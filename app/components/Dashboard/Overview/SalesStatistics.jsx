import { Button } from "@material-tailwind/react";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function SalesStatistic() {
  const chartData = {
    chart1: {
      id: "c1",
      color: ["#007bff", "#ccc"],
      chart: [
        { name: "Blue", value: 70 },
        { name: "Gray", value: 30 },
      ],
      radius: [70, 55],
    },
    chart2: {
      id: "c2",
      color: ["#35BB88", "#ccc"],
      chart: [
        { name: "Red", value: 80 },
        { name: "Gray", value: 20 },
      ],
      radius: [50, 38],
    },
    chart3: {
      id: "c3",
      color: ["#F33C3C", "#ccc"],
      chart: [
        { name: "Green", value: 65 },
        { name: "Gray", value: 35 },
      ],
      radius: [30, 20],
    },
  };

  const incomeData = [
    {
      id: "i1",
      total: 63876,
      title: "Services",
    },
    {
      id: "i2",
      total: 97677,
      title: "Income",
    },
    {
      id: "i3",
      total: 74532,
      title: "Expense",
    },
    {
      id: "i4",
      total: 33334,
      title: "Average",
    },
  ];

  const theme = {
    Services: "#2E53FF",
    Income: "#216FED",
    Expense: "#F33C3C",
    Average: "#35BB88",
  };

  return (
    <>
      <div className=" p-4">
        <div className=" flex justify-between items-center">
          <p>Sales Statistic</p>
          <div className=" pb-1 flex items-center bg-transparent justify-between">
            <select
              className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
              name="dropdown"
            >
              <option className=" p-3 " value="admin">
                Weekly
              </option>
              <option className=" p-3 " value="provider">
                Montly
              </option>
              <option className=" p-3 " value="user">
                Yearly
              </option>
            </select>
          </div>
        </div>

        <div className=" w-full h-[185px] ">
          <ResponsiveContainer>
            <PieChart>
              {Object.keys(chartData).map((item) => (
                <Pie
                  key={chartData[item].id}
                  data={chartData[item].chart}
                  background={{ fill: "#00000" }}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={chartData[item].radius[0]}
                  innerRadius={chartData[item].radius[1]}
                  fill="#8884d8"
                  startAngle={-70}
                  endAngle={250}
                >
                  {chartData[item].chart.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        chartData[item].color[
                          index % chartData[item].color.length
                        ]
                      }
                    />
                  ))}
                </Pie>
              ))}
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className=" grid gap-6 py-1 px-3 grid-cols-2">
          {incomeData.map((item) => (
            <div key={item.id} className=" flex items-center gap-4 ">
              <div
                style={{ background: `${theme[item.title]}` }}
                className={` w-6 h-[45px] `}
              ></div>

              <div className=" flex flex-col ">
                <p className=" text-black font-medium text-lg">
                  {item.title === "Services" ? "" : "$"}
                  {item.total.toLocaleString()}
                </p>
                <p className=" font-normal text-admin_small_text">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
