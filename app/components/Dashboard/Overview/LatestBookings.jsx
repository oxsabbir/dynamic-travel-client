import React from "react";
import { Button } from "@material-tailwind/react";

export default function LatestBookings() {
  return (
    <div className=" flex flex-col ">
      <div className=" flex items-center justify-between px-6 pt-4">
        <h4>Latest bookings</h4>
        <Button
          variant="outlined"
          className=" text-[10px] rounded-full normal-case gap-1 justify-center p-0.5 text-[#4C49F1] border-[#4C49F1] px-4 flex items-center"
        >
          See All
        </Button>
      </div>
      <div className=" pt-2 px-2">
        <h2>the latest bookings</h2>
      </div>
    </div>
  );
}
