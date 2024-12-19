import Image from "next/image";
import pp1 from "@/../public/ocean1.png";
import pp2 from "@/../public/ocean2.png";
import pp3 from "@/../public/ocean3.png";

import { IconButton } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";

export default function BestGuide() {
  const data = [
    {
      id: "p1",
      image: pp1,
      name: "Cristine Watsone",
    },
    {
      id: "p2",
      image: pp2,
      name: "Shane Watson",
    },
    {
      id: "p3",
      image: pp3,
      name: "Jim Kerry",
    },
    {
      id: "p4",
      image: pp1,
      name: "Alexender T",
    },
    {
      id: "p5",
      image: pp2,
      name: "Jim Kerry",
    },
    {
      id: "p6",
      image: pp3,
      name: "Alexender T",
    },
  ];
  return (
    <>
      <div className=" p-6 xl:py-6 xl:px-14">
        <div className="  pb-4">
          <h3 className=" text-lg font-normal pb-1 text-[#3D3338]">
            Loyal Guides
          </h3>
          <p className=" text-[12px] text-admin_text font-normal">
            Monitor the performance
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <h1>hi</h1>
        </div>

        <div className=" pt-4 flex justify-center">
          <IconButton className=" rounded-none bg-[#2E53FF]">
            <ChevronDown />
          </IconButton>
        </div>
      </div>
    </>
  );
}
