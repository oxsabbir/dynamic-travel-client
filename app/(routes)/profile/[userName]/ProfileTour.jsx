"use client";
import { useState } from "react";
import TourCard from "@/app/components/Tour/TourCard";
import { Typography } from "@material-tailwind/react";

export default function ProfileTour() {
  const [selectedBar, setSelectedBar] = useState("upcoming");

  return (
    <>
      <div>
        <div className=" border-b py-2 pb-1 border-b-offBlack flex  items-center gap-2">
          <Typography
            onClick={() => setSelectedBar("upcoming")}
            className={`${
              selectedBar === "upcoming"
                ? "text-textBlack font-medium"
                : "text-offBlack"
            } p-1 tracking-wide cursor-pointer hover:opacity-80 duration-200 text-base`}
          >
            Upcoming
          </Typography>
          <Typography
            onClick={() => setSelectedBar("completed")}
            className={`${
              selectedBar === "completed"
                ? "text-textBlack font-medium"
                : "text-offBlack"
            } p-1 tracking-wide cursor-pointer hover:opacity-80 duration-200 text-base`}
          >
            Completed
          </Typography>
          <Typography
            onClick={() => setSelectedBar("review")}
            className={`${
              selectedBar === "review"
                ? "text-textBlack font-medium"
                : "text-offBlack"
            } p-1 tracking-wide cursor-pointer hover:opacity-80 duration-200 text-base`}
          >
            To Review
          </Typography>
        </div>
      </div>

      <div className=" bg-red-200">
        <TourCard selectedBar={selectedBar} />
      </div>
    </>
  );
}
