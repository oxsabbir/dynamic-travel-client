"use client";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getLoyaleGuide } from "@/app/libs/overviewApi";
import Link from "next/link";
import useDataFetch from "@/app/hooks/useDataFetch";

export default function BestGuide() {
  const [data, loading, error] = useDataFetch(getLoyaleGuide, undefined);
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
          {data?.guide &&
            data?.guide?.map((item, i) => (
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
