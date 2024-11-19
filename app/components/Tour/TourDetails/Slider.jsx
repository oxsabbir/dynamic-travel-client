"use client";

import React from "react";
import { Dialog, Card } from "@material-tailwind/react";
import ImageCarousel from "@/app/ui/ImageSlider";

export function Slider({ open, handleOpen, images }) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} className="h-[90vh]" size="xl">
        <ImageCarousel handleOpen={handleOpen} images={images} />
      </Dialog>
    </>
  );
}
