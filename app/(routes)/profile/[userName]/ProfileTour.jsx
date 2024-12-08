"use client";
import { useState } from "react";
import TourCard from "@/app/components/Tour/TourCard";
import { Typography } from "@material-tailwind/react";

export default function ProfileTour({ userName }) {
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
          {/* <Typography
            onClick={() => setSelectedBar("review")}
            className={`${
              selectedBar === "review"
                ? "text-textBlack font-medium"
                : "text-offBlack"
            } p-1 tracking-wide cursor-pointer hover:opacity-80 duration-200 text-base`}
          >
            To Review
          </Typography> */}
          <Typography
            onClick={() => setSelectedBar("complete")}
            className={`${
              selectedBar === "complete"
                ? "text-textBlack font-medium"
                : "text-offBlack"
            } p-1 tracking-wide cursor-pointer hover:opacity-80 duration-200 text-base`}
          >
            Completed
          </Typography>
        </div>
      </div>

      <div>
        <TourCard filterType={selectedBar} userName={userName} />
      </div>
    </>
  );
}
