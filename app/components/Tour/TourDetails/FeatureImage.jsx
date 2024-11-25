"use client";
import Image from "next/image";
import { Button } from "@/app/ui/materialExport";
import { Slider } from "@/app/components/Tour/TourDetails/Slider";
import { useState } from "react";

export default function FeatureImage({ coverImage, images }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <>
      <Slider
        open={open}
        handleOpen={handleOpen}
        images={images}
        title={"Feature"}
      />
      <div className=" flex lg:flex-row flex-col h-[400px] lg:h-[520px]  gap-6">
        <div className=" w-full lg:w-[70%] h-full">
          <img
            src={coverImage}
            width={600}
            height={350}
            alt="tour-feature-image"
            className=" w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="lg:flex-grow hidden lg:flex lg:w-[25%] w-full flex-col  justify-between ">
          <div className="flex flex-col gap-2  ">
            <Image
              src={images[0]}
              width={500}
              height={300}
              quality={100}
              alt="tour-feature-image"
              className=" w-full h-[230px] object-cover rounded-2xl"
            />
            <Image
              src={images[1]}
              width={500}
              height={300}
              quality={100}
              alt="tour-feature-image"
              className=" w-full h-[230px] object-cover rounded-2xl"
            />
          </div>

          <div>
            <Button
              onClick={handleOpen}
              fullWidth
              className=" bg-actionBlue font-normal text-sm tracking-wide "
            >
              {`${images.length - 2 ? images.length - 2 : ""} MORE PHOTOS`}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
