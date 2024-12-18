"use client";
import React from "react";
import { Card } from "@material-tailwind/react";
import ChartBar from "./ChartBar";

export default function Charts() {
  return (
    <>
      <div className="  pb-8 pt-2 h-full 2xl:h-[840px]  grid  grid-cols-1 lg:grid-cols-8 2xl:grid-cols-4  grid-rows-1 gap-4">
        <div className=" ">
          <Card className="">
            <ChartBar />
          </Card>
        </div>
      </div>
    </>
  );
}
