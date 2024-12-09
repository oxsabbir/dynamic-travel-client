"use client";
import getAllGuides from "@/app/libs/getAllGuide";
import { Input, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Typography, Card, Button } from "@/app/ui/materialExport";
import { HiTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { guideSort } from "@/app/constant/constant";

export default function AllGuide() {
  const [guides, setGuides] = useState(null);
  const [loading, setLoading] = useState(false);
  const [guideType, setGuideType] = useState();
  const [acitveSort, setActiveSort] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await getAllGuides();
        setGuides(res?.guide);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
    setLoading(false);
  }, [guideType, acitveSort]);

  return (
    <>
      <div className="p-3 mb-2 rounded-sm flex items-center justify-between">
        <div>
          <div className=" hidden  md:flex gap-3 ">
            <div className="  md:flex">
              <div className="flex flex-col gap-6">
                <Select
                  //   value={selectedSort}
                  //   onChange={(value) => sortHandler(value)}
                  color="gray"
                  label="Sort By"
                  variant="outlined"
                >
                  {guideSort.map((item) => (
                    <Option key={item.id} value={item.title}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full max-w-[30rem]">
          <Input
            type="text"
            label="Search here"
            className="pr-20"
            onChange={(e) => setTimeout(() => {}, 500)}
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            variant="gradient"
            className="!absolute right-1 top-1 rounded bg-transparent"
          >
            <IoSearch className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {guides?.length > 0 &&
            guides?.map((item) => (
              <Card key={item?.userName}>
                <div className=" rounded-md p-4">
                  <div>
                    <Image
                      src={item?.profileImage}
                      alt="guides-profile"
                      width={350}
                      height={230}
                      className=" w-full h-[240px] object-cover rounded-md"
                    />
                  </div>
                  <div className=" flex justify-between items-center">
                    <div className=" pt-3">
                      <Typography className=" font-medium text-lg text-offBlack tracking-wide">
                        {item?.fullName}
                      </Typography>
                      <Typography className=" font-thin text-sm text-offBlack tracking-wide">
                        ${item?.price} per/person
                      </Typography>
                    </div>
                    <div className=" flex items-center gap-1 self-end">
                      <Button
                        size="sm"
                        // id={item?.id}
                        // onClick={handleOpen}
                        className=" flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-blue-gray-500"
                      >
                        <HiTrash className="w-4 h-4 pointer-events-none" />
                      </Button>

                      <Link href={`/profile/${item?.userName}`}>
                        <Button
                          size="sm"
                          className="flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-actionBlue"
                        >
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
