"use client";

import React from "react";
import { Dialog } from "@material-tailwind/react";
import ImageCarousel from "@/app/ui/ImageSlider";

export function Slider({ open, handleOpen, images }) {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-green-300 p-3 h-[90vh]"
        size="xl"
      >
        <ImageCarousel images={images} />
      </Dialog>
    </>
  );
}
