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
        <h2>stats</h2>
      </div>
    </>
  );
}
