"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTourBySelection } from "@/app/libs/tourApi";

export default function TourCard({ selectedBar }) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getData = async function () {
      try {
        const data = await getTourBySelection(selectedBar);
        console.log(data);
        setTours(data);
      } catch (error) {
        console.log(error);
        throw error;
      }

      getData();
    };
  }, [selectedBar]);

  return (
    <>
      <div className=" py-2">
        <h1>Hello</h1>
        <p>{selectedBar}</p>
      </div>

      <div>
        {!tours?.length > 0 && (
          <div>
            <h1>No {selectedBar} tour found</h1>
          </div>
        )}

        {tours &&
          tours?.map((tour) => (
            <Link href={`/tour/${tour.id}`}>
              <div className="p-3">
                <div className="">
                  <Image
                    src={tour?.coverImage}
                    alt="slide-image"
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className=" rounded-lg !h-[280px] w-full "
                  />
                </div>

                <div className=" py-5 px-5 flex md:flex-col gap-2 lg:flex-row items-center justify-between">
                  <div>
                    <h4 className=" font-bold text-lg tracking-wide pb-1.5">
                      {tour.title}
                    </h4>
                    <p className=" flex items-center gap-2 text-textBlack">
                      <IoLocationSharp /> {tour.startLocation?.address}
                    </p>
                  </div>

                  <div>
                    <p className=" font-medium flex items-center gap-1.5 text-white bg-actionBlue px-3 py-1.5 rounded-2xl">
                      <FaStar />
                      {tour.ratingsAverage}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
