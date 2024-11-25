"use client";
import { DeleteModal } from "@/app/ui/DeleteModal";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HiHeart,
  HiLocationMarker,
  HiUser,
  HiStar,
  HiFlag,
  HiOutlinePencilAlt,
  HiTrash,
} from "react-icons/hi";
import { IoIosPricetag } from "react-icons/io";

import { deleteTour } from "@/app/libs/tourApi";

export default function TourList({ tourData, activeFilter, pageType }) {
  const [open, setOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);

  const handleOpen = () => setOpen((prev) => !prev);

  const deleteTourHandler = async function () {
    console.log(selectedTourId);
  };

  // grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
  const isAdmin = pageType === "admin";

  const deactiveFilterAdminStyle = `${
    isAdmin
      ? "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      : "lg:grid-cols-3 2xl:grid-cols-4"
  }`;

  const activeFilterAdminStyle = `${
    isAdmin
      ? "lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3"
      : "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3"
  }`;

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          activeFilter ? activeFilterAdminStyle : deactiveFilterAdminStyle
        }  justify-items-center  gap-x-4 gap-y-6  py-4 `}
      >
        <DeleteModal
          handleOpen={handleOpen}
          open={open}
          confirmHandler={deleteTourHandler}
        />

        {tourData?.tour?.map((item) => (
          <Card
            key={item?.id}
            draggable={isAdmin ? true : false}
            id={item?.id}
            className="w-full flex flex-col bg-white justify-between"
          >
            <CardBody className=" flex flex-col">
              <div className=" h-[250px]">
                <Image
                  src={item?.coverImage}
                  width={650}
                  height={380}
                  alt={"tourImage"}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>

              <div>
                <Typography variant="h5" className="mb-2 mt-3 text-black">
                  {item?.title}
                </Typography>
                <Typography className="text-offGray">
                  {item?.summery}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col gap-6 ">
              <div className=" pt-4 grid grid-cols-2  gap-3 ">
                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiLocationMarker className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {item?.startLocation?.address}
                </Typography>
                <Typography
                  variant="small"
                  className="text-offGray gap-1 flex items-center  "
                >
                  <HiUser className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.totalParticipant} People`}
                </Typography>

                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiFlag className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.locations.length} Stop`}
                </Typography>
                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiStar className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.ratingsAverage} (${item.totalRating})`}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography
                  variant="paragraph"
                  className="  text-green-700  font-normal tracking-wide gap-1  flex items-center  "
                >
                  <IoIosPricetag className="w-6 h-6 mr-0.5 text-green-700" />
                  {`$ ${item?.price}`}
                </Typography>

                {/* Conditional render depending on pageType */}
                {isAdmin ? (
                  <div className=" flex items-center">
                    <Button
                      size="sm"
                      id={item?.id}
                      onClick={handleOpen}
                      className=" flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-blue-gray-500"
                    >
                      <HiTrash className="w-4 h-4" />
                    </Button>

                    <Link
                      href={`/dashboard/tour-management/update-tour/${item?.id}`}
                    >
                      <Button
                        size="sm"
                        className="flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-actionBlue"
                      >
                        <HiOutlinePencilAlt className="w-4 h-4 mb-0.5" />
                        Edit
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="">
                    <Button size="sm" color="blue-gray" className=" mr-3">
                      <HiHeart className="w-4 h-4" />
                    </Button>

                    <Link href={`/tour/${item?.id}`}>
                      <Button size="sm" className=" bg-actionBlue font-light">
                        Details
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
