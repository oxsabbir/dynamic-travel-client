"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function TourSlider({ bestTours }) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className="flex-grow sm:text-left text-center">
          <h3 className=" text-4xl pb-3  font-bold text-black">
            Popular Destination
          </h3>
          <p className=" text-sm tracking-wide">
            Unlead Your Wanderlust With SkyWings
          </p>
        </div>
        <div className="sm:flex items-center gap-3 hidden ">
          <button>
            <FaArrowLeft className=" prev-slide  w-10 h-10 p-2.5 bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
          <button>
            <FaArrowRight className=" next-slide w-10 h-10 p-2.5  bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
        </div>
      </div>

      <div className="py-6 justify-center cursor-pointer md:gap-4">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".next-slide", prevEl: ".prev-slide" }}
          pagination={{ clickable: true }}
        >
          {bestTours?.tour?.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Link href={`/tour/${tour.id}`}>
                <div className="p-3">
                  <div className="">
                    <Image
                      src={tour?.coverImage}
                      alt="slide-image"
                      width={700}
                      height={400}
                      style={{ objectFit: "cover" }}
                      className=" rounded-lg h-[270px] w-full "
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
