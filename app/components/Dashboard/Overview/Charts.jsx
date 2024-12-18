"use client";
import React from "react";
import { Card } from "@material-tailwind/react";
import ChartBar from "./ChartBar";

export default function Charts() {
  return (
    <>
      <div className=" ">
        <Card className="">
          <ChartBar />
        </Card>
      </div>
    </>
  );
}
