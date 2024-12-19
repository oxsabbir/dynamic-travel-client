import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Chrome", value: 400 },
  { name: "Firefox", value: 300 },
  { name: "Safari", value: 300 },
  { name: "Edge", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ChartPie() {
  return (
    <>
      <div className=" flex flex-col p-5">
        <p className=" font-medium text-[#515151] pb-3 text-base">
          Total User : {"140k"}
        </p>
        <div className="w-full h-[240px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                innerRadius={20}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className=" grid grid-cols-2  px-4 pt-4 gap-2">
          {data.map((entry, index) => (
            <div className=" flex items-center gap-2">
              <div
                style={{ background: COLORS[index].toLocaleLowerCase() }}
                className={`h-3 w-3 rounded-full`}
              ></div>
              <p className=" text-sm text-admin_text ">{`${entry.name} : ${entry.value}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
