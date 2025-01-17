"use client";

import React, { useEffect, useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import {
  DollarSign,
  CircleEllipsis,
  ShoppingBag,
  Activity,
} from "lucide-react";
import CalenderMenu from "./CalenderMenu";
import { getSellsStats } from "@/app/libs/overviewApi";
import { SalesSkeleton } from "@/app/ui/skeleton/SalesBar";
import useDataFetch from "@/app/hooks/useDataFetch";

export default function Sells({ filterby }) {
  const [data, loading, error] = useDataFetch(getSellsStats, filterby);

  const mainData = [
    {
      title: "Net Income",
      icon: DollarSign,
      amount: data?.totalSells?.amount,
      change: data?.totalSells?.changes.amount,
      increase: data?.totalSells?.changes?.increased,
    },
    {
      title: "Avr. Order Value",
      icon: Activity,
      amount: data?.averageSells?.amount,
      change: data?.averageSells?.changes.amount,
      increase: data?.averageSells?.changes.increased,
    },
    {
      title: "Total Bookings",
      icon: ShoppingBag,
      amount: data?.totalBookings?.amount,
      change: data?.totalBookings?.changes.amount,
      increase: data?.totalBookings?.changes?.increased,
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-4 gap-6  py-4">
        {loading && (
          <>
            {mainData?.map((item, i) => (
              <Card key={i}>
                <div className=" flex justify-between py-3 px-5 items-center border-b-[2px] border-[#CCCCCC]">
                  <SalesSkeleton />
                </div>
              </Card>
            ))}
          </>
        )}

        {!loading &&
          mainData?.map((item) => (
            <Card key={item.title}>
              <div
                key={item.title}
                className=" flex justify-between py-3 px-5 items-center border-b-[2px] border-[#CCCCCC]"
              >
                <div className=" flex gap-3 items-center font-bold">
                  <item.icon className=" w-7 h-7" />
                  <Typography className=" font-semibold">
                    {item.title}
                  </Typography>
                </div>

                <CircleEllipsis className=" float-right" />
              </div>

              <div className="p-6 px-7  flex flex-col justify-center">
                <Typography variant="h4" className=" font-semibold pb-4">
                  {item.title !== "Total Bookings" ? "$" : ""}
                  {item.title !== "Total Bookings" ? item.amount : item.amount}
                </Typography>
                <div className=" flex items-center">
                  <span>
                    <Typography
                      variant="small"
                      className={`font-medium ${
                        item.increase ? "positive" : "negative"
                      } px-5 mr-3 rounded-2xl`}
                    >
                      {item.increase ? "+" : "-"} {item.change}
                      {!item.increase && "100 "}
                    </Typography>
                  </span>
                  <Typography
                    variant="small"
                    className=" text-sm  font-normal text-dashboard_text"
                  >
                    From last period
                  </Typography>
                </div>
              </div>
            </Card>
          ))}

        <div className=" grid-cols-1 grid-rows-1">
          <CalenderMenu />
        </div>
      </div>
    </>
  );
}
