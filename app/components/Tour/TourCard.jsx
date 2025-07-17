"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserBooking } from "@/app/libs/bookingApi";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiStar,
  HiOutlineArrowSmRight,
} from "react-icons/hi";

import DateManager from "@/app/util/DateManager";

import Image from "next/image";
import { Avatar, Button, Spinner, Typography } from "@material-tailwind/react";

export default function TourCard({ filterType, userName }) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const dateManager = new DateManager();

  useEffect(() => {
    const getData = async function () {
      setLoading(true);
      try {
        const bookingData = await getUserBooking(userName, filterType);
        setTours(bookingData?.booking);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    getData();
  }, [filterType]);

  console.log(filterType);

  return (
    <>
      <div>
        {loading && (
          <div className=" w-full p-5 flex items-center justify-center">
            <Spinner className=" w-12 h-12" />
          </div>
        )}

        {!tours?.length > 0 && !loading && (
          <div className=" w-full p-5 text-center">
            <Typography className=" text-offBlack text-xl font-normal">
              No {filterType} tour found
            </Typography>
          </div>
        )}
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-4 gap-6 ">
          {tours?.length > 0 &&
            !loading &&
            tours?.map((tour) => (
              <Link key={tour?.id} href={`/tour/${tour.tour.id}`}>
                <div className="p-5 rounded-lg shadow-md bg-offWhite">
                  <div className="">
                    <Image
                      src={tour?.tour.coverImage}
                      alt="slide-image"
                      width={500}
                      height={300}
                      style={{ objectFit: "cover" }}
                      className=" rounded-lg !h-[250px] w-full "
                    />
                  </div>

                  <div className=" p-2 px-0  flex md:flex-col gap-2 lg:flex-row items-center mt-2  justify-between">
                    <div>
                      <h4 className=" font-medium text-xl text-offBlack tracking-wide pb-1.5">
                        {tour.tour.title}
                      </h4>
                    </div>
                    <div className=" flex items-center">
                      <p className=" font-medium flex items-center gap-1.5 text-white bg-actionBlue px-3 py-1.5 rounded-xl">
                        <HiStar />
                        {tour.tour.ratingsAverage}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className=" grid grid-cols-2  gap-3 ">
                      <Typography
                        variant="small"
                        className="  text-offGray   gap-1  flex items-center  "
                      >
                        <HiOutlineLocationMarker className="w-6 h-6 mr-0.5 text-actionBlue" />
                        {"Paris, France"}
                      </Typography>
                      {filterType === "complete" ? (
                        <Typography
                          variant="small"
                          className="  text-offGray   gap-1  flex items-center"
                        >
                          <HiOutlineCalendar className="w-6 h-6 mr-0.5 text-actionBlue" />
                          <span>
                            {
                              dateManager.getDaysLeft(tour?.startDate)
                                .dateFormat
                            }
                          </span>
                        </Typography>
                      ) : (
                        <Typography
                          variant="small"
                          className="  text-offGray   gap-1  flex items-center group"
                        >
                          <HiOutlineCalendar className="w-6 h-6 mr-0.5 text-actionBlue" />
                          <span className=" group-hover:-translate-x-9 group-hover:opacity-0 duration-200">
                            {
                              dateManager.getDaysLeft(tour?.startDate)
                                .daysString
                            }
                          </span>
                          <span className=" opacity-0 group-hover:-translate-x-[70px] group-hover:opacity-100 duration-200">
                            {
                              dateManager.getDaysLeft(tour?.startDate)
                                .dateFormat
                            }
                          </span>
                        </Typography>
                      )}
                    </div>
                  </div>

                  <div className=" bg-gradient-to-r from-actionBlue to-pink-300 h-[1px] rounded-full mt-2 mb-1 "></div>
                  <div className=" p-2 rounded-md ">
                    <div className=" flex items-center group gap-3  duration-200 hover:cursor-pointer ">
                      <Avatar
                        src={tour?.guide?.profileImage}
                        alt="guide-profile"
                        variant="rounded"
                        className=" w-[60px] h-[60px] object-cover  "
                      />
                      <div className=" flex-grow ">
                        <Link href={`/profile/${tour?.guide?.userName}`}>
                          <Typography className="text-lg text-offBlack font-medium tracking-wide">
                            {tour?.guide?.fullName}{" "}
                            <span className=" bg-gradient-to-r from-actionBlue to-pink-300 px-3  text-sm py-[2px] mx-2 rounded-full  text-white">
                              Guide
                            </span>
                          </Typography>

                          <Typography
                            variant="small"
                            className=" text-offBlack  tracking-wide"
                          >
                            {`$${tour?.guide?.price} per/person`}
                          </Typography>
                        </Link>
                      </div>

                      {filterType !== "complete" ? (
                        <Link href={`/profile/${tour?.guide?.userName}`}>
                          <div className=" p-1.5 rounded-full  tracking-wide  flex items-center group-hover:border-actionBlue border">
                            <HiOutlineArrowSmRight className=" text-offBlack duration-200 group-hover:translate-x-[2px] group-hover:text-actionBlue w-7 h-7" />
                          </div>
                        </Link>
                      ) : (
                        <Link
                          key={tour?.id}
                          href={`/tour/${tour.tour.id}#reviews`}
                        >
                          <Button
                            variant="outlined"
                            className="p-1 px-3 group tracking-wide  flex items-center group-hover:border-actionBlue border"
                          >
                            Review
                            <HiOutlineArrowSmRight className=" text-offBlack duration-200 group-hover:translate-x-[2px] group-hover:text-actionBlue w-7 h-7" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
