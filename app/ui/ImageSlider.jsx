"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./imageSlider.css";
import { IconButton, Typography } from "@material-tailwind/react";
import { HiOutlineDownload, HiOutlineX } from "react-icons/hi";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { convertToDataURL } from "../util/helper";

export default function ImageCarousel({ handleOpen, images, title }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  return (
    <>
      <div className="rounded-lg shadow-md w-full h-[95%] relative p-3 bg-offWhite">
        <div className=" flex justify-between px-3 items-center mb-2 ">
          <Typography className=" tracking-wider text-gray-900">
            {title} Image
          </Typography>
          <div className=" flex gap-2 items-center">
            <IconButton onClick={handleOpen} variant="gradient" size="sm">
              <HiOutlineX className=" w-6 h-6" />
            </IconButton>
            <a href={activeImageIndex >= 0 && images[activeImageIndex]}>
              <IconButton variant="gradient" size="sm">
                <HiOutlineDownload className=" w-6 h-6" />
              </IconButton>
            </a>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          onSlideChange={(value) => setActiveImageIndex(value?.activeIndex)}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className=" rounded-lg shadow-lg "
        >
          {images &&
            images?.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={convertToDataURL(item)}
                  alt={`tour_image_${i}`}
                  className=" w-full  "
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
