"use client";
import Image from "next/image";
import pp1 from "@/../public/ocean1.png";
import pp2 from "@/../public/ocean2.png";
import pp3 from "@/../public/ocean3.png";

import { IconButton, Typography } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getLoyaleGuide } from "@/app/libs/overviewApi";
import Link from "next/link";

export default function BestGuide() {
  const [loyaleGuide, setLoyaleGuide] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getLoyaleGuide();
        console.log(data?.guide);
        setLoyaleGuide(data?.guide);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw error;
      }
    };
    getData();
  }, []);

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
      <div className=" p-6 xl:py-6 xl:px-14 flex flex-col  ">
        <div className="  pb-4">
          <h3 className=" text-lg font-normal pb-1 text-[#3D3338]">
            Loyal Guides
          </h3>
          <p className=" text-[12px] text-admin_text font-normal">
            Monitor the performance
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {loyaleGuide &&
            loyaleGuide?.map((item, i) => (
              <Link key={i} href={`/profile/${item?.info[0]?.userName}`}>
                <div className=" flex items-center gap-6 hover:opacity-80 hover:duration-300 hover:cursor-pointer">
                  <Image
                    src={item?.info[0]?.profileImage}
                    width={60}
                    height={60}
                    className=" w-[60px] h-[60px] object-cover rounded-md "
                    alt="Profile"
                  />
                  <div>
                    <Typography className="text-offBlack text-lg font-normal tracking-wide">
                      {item?.info[0]?.fullName}
                    </Typography>
                    <p className="  text-sm tracking-wide font-medium text-[#4255e7]">
                      {item?.completed} Tour Completed
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* <div className=" pt-4 flex bg-green-200 justify-center">
          <IconButton className=" rounded-none bg-[#2E53FF]">
            <ChevronDown />
          </IconButton>
        </div> */}
      </div>
    </>
  );
}
