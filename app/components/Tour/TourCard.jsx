"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserBooking } from "@/app/libs/bookingApi";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Avatar, Spinner, Typography } from "@material-tailwind/react";

export default function TourCard({ filterType, userName }) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async function () {
      setLoading(true);
      try {
        const bookingData = await getUserBooking(userName, filterType);
        console.log(bookingData?.booking);
        setTours(bookingData?.booking);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw error;
      }
    };
    getData();
  }, [filterType]);

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
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-2 gap-5 ">
          {tours?.length > 1 &&
            !loading &&
            tours?.map((tour) => (
              <Link href={`/tour/${tour.tour.id}`}>
                <div className="p-3 px-0">
                  <div className="">
                    <Image
                      src={tour?.tour.coverImage}
                      alt="slide-image"
                      width={500}
                      height={300}
                      style={{ objectFit: "cover" }}
                      className=" rounded-lg !h-[280px] w-full "
                    />
                  </div>

                  <div className=" py-2  flex md:flex-col gap-2 lg:flex-row items-center justify-between">
                    <div>
                      <h4 className=" font-bold text-lg tracking-wide pb-1.5">
                        {tour.tour.title}
                      </h4>
                      <p className=" flex items-center gap-2 text-textBlack">
                        {/* <IoLocationSharp /> {tour.startLocation?.address} */}
                      </p>
                    </div>

                    <div className=" flex items-center">
                      <Link href={`/profile/${tour.guide?.userName}`}>
                        <Avatar
                          src={tour.guide?.profileImage}
                          className=" w-[65px] h-[65px] object-cover"
                          id={tour?.guide?.id}
                        />
                      </Link>
                      {/* 
                      <p className=" font-medium flex items-center gap-1.5 text-white bg-actionBlue px-3 py-1.5 rounded-2xl">
                        <FaStar />
                        {tour.tour.ratingsAverage}
                      </p> */}
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
