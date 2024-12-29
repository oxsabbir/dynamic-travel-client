"use client";

// import { Card } from "@/helper/clientComponents";
import { Card } from "@material-tailwind/react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ReviewAndBooking() {
  const userColor = ["#2E53FF", "#789DFB", "#E5E5E5"];
  const reviewData = {
    title: "User Action Ratio",
    total: 4643,
    colors: userColor,
    data: [
      { name: "Total Appontment", value: 600, diff: 67, increase: true },
      { name: "Total Cancelled", value: 140, diff: 21, increase: false },
      { name: "Total Pending", value: 190, diff: 32, increase: false },
    ],
  };

  return (
    <>
      <div className=" grid grid-cols-1 h-full gap-8">
        <Card key={reviewData.title} className=" p-6 px-8">
          <h4 className=" text-lg font-medium pb-1">{reviewData.title}</h4>
          <p className=" text-[22px] font-bold ">{reviewData.total}</p>
          <div className="  flex h-full items-center">
            <div className="w-full">
              <div className=" flex items-center pb-1 gap-2">
                <div className=" w-5 h-3 rounded-xl bg-[#2E53FF]"></div>{" "}
                <p className="text-[12px] font-medium ">
                  <span className=" font-bold">43%</span> Newly Joined
                </p>
              </div>
              <div className=" flex items-center pb-1 gap-2">
                <div className=" w-5 h-3 rounded-xl bg-[#789DFB]"></div>{" "}
                <p className="text-[12px] font-medium ">
                  <span className=" font-bold">32%</span> Booked Tour
                </p>
              </div>
              <div className=" flex items-center pb-1 gap-2">
                <div className=" w-5 h-3 rounded-xl bg-[#E5E5E5]"></div>{" "}
                <p className="text-[12px] font-medium ">
                  <span className=" font-bold">53%</span> Created Review
                </p>
              </div>
            </div>
            <div className="w-full h-full min-h-[180px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={reviewData.data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={40}
                    cornerRadius={5}
                    paddingAngle={1}
                    fill="#8884d8"
                  >
                    {reviewData.data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          reviewData.colors[index % reviewData.colors.length]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip isAnimationActive />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
