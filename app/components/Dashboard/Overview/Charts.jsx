"use client";
import React from "react";
import { Card } from "@material-tailwind/react";
import ChartBar from "./ChartBar";
import LatestBookings from "./LatestBookings";
import ChartPie from "./ChartPie";
import BestGuide from "./BestGuide";

export default function Charts() {
  return (
    <>
      <div className="  pb-8 pt-2 h-full 2xl:h-[840px]  grid  grid-cols-1 lg:grid-cols-8 2xl:grid-cols-4  grid-rows-1 gap-4">
        <div className=" 2xl:col-span-2 lg:row-span-1 col-span-4 lg:col-span-5 2xl:row-span-3">
          <Card className="">
            <ChartBar />
          </Card>
        </div>

        <Card className=" row-span-2 2xl:row-span-4 lg:col-span-3  overflow-auto  2xl:col-span-1 col-span-4">
          <LatestBookings />
        </Card>
        <div className="row-span-2 lg:row-span-1  lg:col-span-5 col-span-4 2xl:col-span-1">
          <Card>
            <ChartPie />
          </Card>
        </div>
        <div className=" row-span-2 lg:col-span-4 lg:row-span-1 col-span-4 2xl:col-span-2">
          <Card>
            <BestGuide />
          </Card>
        </div>
      </div>
    </>
  );
}
