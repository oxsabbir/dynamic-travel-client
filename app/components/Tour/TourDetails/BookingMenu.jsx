"use client";
import {
  Card,
  Typography,
  Button,
  Select,
  Option,
  Avatar,
} from "@/app/ui/materialExport";

import SelectDate from "@/app/components/Extras/SelectDate";
import { HiOutlineX } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function BookingMenu({ guide }) {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const selectHandler = function (value) {
    const selected = guide.find((item) => item.userName === value);
    setSelectedGuide(selected);
  };
  return (
    <>
      <Card className="rounded-md  lg:absolute  p-8 w-full lg:w-[400px] bg-offWhite top-0 right-0">
        <div className=" ">
          <Typography className="tracking-wide text-center py-2 font-medium text-lg uppercase text-textBlack">
            Find a guide by your date
          </Typography>

          <div className="flex flex-col">
            <SelectDate />
          </div>
          <div className="my-4">
            {!selectedGuide && (
              <Select
                onChange={(value) => selectHandler(value)}
                label="Select Your Guide"
                className="py-2"
              >
                {guide &&
                  guide?.map((item) => (
                    <Option
                      key={item?.userName}
                      value={item?.userName}
                      className=" bg-offWhite p-2 my-2"
                    >
                      <div className=" flex items-center gap-3 rounded-md">
                        <Avatar src={item?.profileImage} alt="profile" />
                        <Typography className=" text-offGray font-medium tracking-wide">
                          {item?.fullName}
                        </Typography>
                      </div>
                    </Option>
                  ))}
              </Select>
            )}

            {selectedGuide && (
              <div
                key={selectedGuide?.userName}
                value={selectedGuide?.userName}
                className=" bg-offWhite"
              >
                <Typography className=" border-b border-[#443f3f8c] pb-1">
                  Selected Guide
                </Typography>
                <div className=" flex  items-center gap-3 justify-between mt-3">
                  <div className=" flex items-center  gap-3 ">
                    <Avatar src={selectedGuide?.profileImage} alt="profile" />
                    <Typography className="text-lg text-offGray font-medium tracking-wide">
                      {selectedGuide?.fullName}
                    </Typography>
                  </div>

                  <IconButton
                    size="sm"
                    variant="text"
                    className="  bg-offWhite border border-black rounded-full"
                    onClick={() => setSelectedGuide(null)}
                  >
                    <HiOutlineX className=" w-5 h-5" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          <Button
            disabled={!selectedGuide}
            className="uppercase font-normal text-sm tracking-wide bg-actionBlue"
            fullWidth
          >
            Book a guide
          </Button>
        </div>
      </Card>
    </>
  );
}
