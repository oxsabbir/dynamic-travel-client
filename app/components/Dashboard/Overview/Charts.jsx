"use client";
import React from "react";
import { Card } from "@material-tailwind/react";
import ChartBar from "./ChartBar";
import BestGuide from "./BestGuide";
import ReviewAndBooking from "./ReviewAndBooking";
import UserJoinStats from "./UserJoinStats";

export default function Charts() {
  return (
    <>
      <div className="pb-8 pt-2 grid grid-cols-1 xl:grid-cols-2  grid-rows-2 gap-4">
        <Card className=" col-span-1 row-span-1 ">
          <ChartBar />
        </Card>

        <Card className=" col-span-1 row-span-1">
          <ReviewAndBooking />
        </Card>

        <div className=" col-span-1 row-span-1">
          <Card className="h-full">
            <BestGuide />
          </Card>
        </div>
        <div className="col-span-1 row-span-1 ">
          <Card className=" h-full">
            <UserJoinStats />
          </Card>
        </div>
      </div>
    </>
  );
}
