"use client";

import useDataFetch from "@/app/hooks/useDataFetch";
// import { Card } from "@/helper/clientComponents";
import { Card } from "@material-tailwind/react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { getUserBookedRatio } from "@/app/libs/overviewApi";

export default function ReviewAndBooking() {
  const [data, loading, error] = useDataFetch(getUserBookedRatio, undefined);
  const userColor = ["#789DFB", "#2E53FF"];

  const chartData = [
    {
      name: "Not Booked Yet",
      value: data?.userBookingRatio?.notBookedUser?.amount || 0,
    },
    {
      name: "Booked Tour",
      value: data?.userBookingRatio?.bookedUser?.amount || 0,
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1 h-full gap-8">
        <Card className=" p-6 px-8">
          <h4 className=" text-lg font-medium pb-1">Booking Ratio</h4>
          <p className=" text-[22px] font-bold ">
            {data?.userBookingRatio?.totalUser}
          </p>
          <div className="  flex h-full items-center">
            <div className="w-full">
              <div className=" flex items-center pb-1 gap-2">
                <div
                  className={`w-5 h-3 rounded-xl bg-[${userColor[0]}]`}
                ></div>{" "}
                <p className="text-[12px] font-medium ">
                  <span className=" font-bold">
                    {data?.userBookingRatio?.notBookedUser?.parcentage}%
                  </span>{" "}
                  Didn't Booked yet
                </p>
              </div>
              <div className=" flex items-center pb-1 gap-2">
                <div
                  className={`w-5 h-3 rounded-xl bg-[${userColor[1]}]`}
                ></div>{" "}
                <p className="text-[12px] font-medium ">
                  <span className=" font-bold">
                    {data?.userBookingRatio?.bookedUser?.parcentage}%
                  </span>{" "}
                  Booked Tour
                </p>
              </div>
            </div>
            <div className="w-full h-full min-h-[180px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={40}
                    cornerRadius={5}
                    paddingAngle={1}
                    fill="#8884d8"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={userColor[index % userColor.length]}
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
