"use client";

import { Avatar, Typography } from "@material-tailwind/react";

export default function GuideList() {
  return (
    <>
      <div className=" flex  items-center gap-3 justify-between mt-3">
        <div className=" flex items-center  gap-3 ">
          <Avatar src={selectedGuide?.profileImage} alt="profile" />
          <div>
            <Typography className="text-lg text-offGray font-medium tracking-wide">
              {selectedGuide?.fullName}
            </Typography>
            <Typography
              variant="small"
              className=" text-offGray  tracking-wide"
            >
              {`$${selectedGuide?.price} per/person`}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
