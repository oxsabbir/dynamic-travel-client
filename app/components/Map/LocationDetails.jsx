"use client";
import { Typography, Button } from "@material-tailwind/react";
import { useMapContext } from "../Dashboard/CreateTour/MapContext";
import { Slider } from "../Tour/TourDetails/Slider";
import { useState } from "react";
export default function LocationDetails({ location, pageType }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="min-w-[300px]">
        <Slider open={open} handleOpen={handleOpen} images={location?.image} />
        <Typography
          variant="h5"
          className=" text-blue-gray-700 font-medium border-b pb-1 border-blue-gray-700"
        >
          Place Details
        </Typography>
        <div className="mr-3 flex flex-col gap-3 mt-2 ">
          <div>
            <Typography
              variant="paragraph"
              className=" text-blue-gray-700 font-medium"
            >
              Address
            </Typography>

            <Typography variant="small" className="text-shadeBlack text-sm">
              {location?.address}
            </Typography>
          </div>
          <div>
            <Typography
              variant="paragraph"
              className=" text-blue-gray-700 font-medium"
            >
              Description
            </Typography>

            <Typography variant="small" className="text-shadeBlack text-sm">
              {location?.description}
            </Typography>
          </div>

          <div>
            {location.images?.length > 0 && (
              <>
                <Typography
                  variant="paragraph"
                  className=" text-blue-gray-700 font-medium"
                >
                  Location images
                </Typography>
                <div className="w-full mt-1 relative">
                  <img
                    src={location.images[0]}
                    className=" w-full h-[200px]  object-cover rounded-lg"
                  />
                </div>
              </>
            )}
          </div>

          {pageType === "admin" && (
            <div className=" flex items-center gap-3 pt-4 justify-center ">
              <Button className=" w-28 bg-red-400 p-2 px-3 font-normal tracking-wide ">
                Delete
              </Button>
              <Button className=" w-28 bg-actionBlue p-2 px-3 font-normal tracking-wide">
                Edit
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
