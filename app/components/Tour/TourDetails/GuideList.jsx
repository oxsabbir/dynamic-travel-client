"use client";

import { Avatar, Typography, Radio, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import getAllGuides from "@/app/libs/getAllGuide";

export default function GuideList() {
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await getAllGuides();
        if (response.guide) {
          setGuide(response.guide);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  const guideSelectHandler = function (event) {
    event.stopPropagation();
    const guideId = event.target.id;

    setSelectedGuide((prev) => {
      if (prev.includes(guideId)) {
        return [...prev.filter((item) => item !== guideId)];
      } else {
        return [...prev, guideId];
      }
    });
  };

  return (
    <>
      <div className=" flex flex-col gap-6 py-2 px-1">
        {loading && (
          <div className=" flex justify-center">
            <Spinner />
          </div>
        )}
        {guide?.length > 0 &&
          !loading &&
          guide.map((item) => (
            <div
              id={item.id}
              onClick={guideSelectHandler}
              key={item.id}
              className=" flex items-center  gap-3 hover:opacity-75 duration-200 hover:cursor-pointer "
            >
              <Avatar
                src={item?.profileImage}
                alt="profile"
                className="pointer-events-none"
              />
              <div className=" flex-grow pointer-events-none">
                <Typography className="text-lg text-offGray font-medium tracking-wide">
                  {item?.fullName}
                </Typography>
                <Typography
                  variant="small"
                  className=" text-offGray  tracking-wide"
                >
                  {`$${item?.price} per/person`}
                </Typography>
                {/* <Checkbox defaultChecked /> */}
              </div>
              <Radio id={item.id} checked={selectedGuide.includes(item.id)} />
            </div>
          ))}
      </div>
    </>
  );
}
