import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./imageSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ImageCarousel({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" w-full !h-full"
      >
        {images &&
          images?.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item}
                alt={`tour_image_${i}`}
                className="!h-full w-full"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
