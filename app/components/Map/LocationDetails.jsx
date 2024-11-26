"use client";
import { Typography, Button } from "@material-tailwind/react";
import { Slider } from "../Tour/TourDetails/Slider";
import { useState } from "react";
import { useMapContext } from "../Dashboard/CreateTour/MapContext";
export default function LocationDetails({ location, pageType, setPosition }) {
  const mapContext = pageType === "admin" ? useMapContext() : [];
  const state = mapContext?.state;
  const dispatch = mapContext?.dispatch;

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => setIsEditing((prev) => !prev);
  const handleOpen = () => setOpen((prev) => !prev);

  const deleteHandler = function (event) {
    const tourId = event.target.id;
    console.log(tourId);
    dispatch({ type: "DELETE_LOCATION", payload: tourId });
  };

  return (
    <>
      <div className="max-w-[260px]">
        <Slider
          open={open}
          handleOpen={handleOpen}
          images={location?.images}
          title={"Location"}
        />
        <Typography
          variant="h5"
          className=" text-blue-gray-700 font-medium border-b pb-1 border-blue-gray-700"
        >
          Place Details
        </Typography>
        <div className="flex flex-col gap-3 mt-2 ">
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
                  Location Images
                </Typography>
                <div className="w-full group mt-1 relative ">
                  <div
                    onClick={handleOpen}
                    className=" absolute group-hover:opacity-100 flex duration-300 group-hover:duration-300 opacity-0 cursor-pointer items-center justify-center bg-[#00000075] w-full h-full top-0 left-0 rounded-lg"
                  >
                    <Typography variant="lead" className="text-offWhite p-2">
                      Show More
                    </Typography>
                  </div>
                  <img
                    src={location.images[0]}
                    className=" w-full h-[180px] object-cover rounded-lg"
                  />
                </div>
              </>
            )}
          </div>

          {pageType === "admin" && (
            <div className=" flex items-center gap-3 pt-2 justify-center ">
              <Button
                id={location.coordinates.join(",")}
                onClick={deleteHandler}
                className=" w-28 bg-red-400 p-2 px-3 font-normal tracking-wide "
              >
                Delete
              </Button>
              <Button
                onClick={editHandler}
                className=" w-28 bg-actionBlue p-2 px-3 font-normal tracking-wide"
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
