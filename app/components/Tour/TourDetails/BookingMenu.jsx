"use client";
import {
  Card,
  Typography,
  Button,
  Select,
  Option,
  Avatar,
} from "@/app/ui/materialExport";

import SelectDate from "@/app/components/Extras/SelectDate";
import { HiOutlineX } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import bookTour from "@/app/libs/bookTour";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

export default function BookingMenu({ tourData, guide }) {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const selectHandler = function (value) {
    const selected = guide.find((item) => item.userName === value);
    setSelectedGuide(selected);
  };

  const makePayment = async function () {
    setLoading(true);
    const session = await getSession();
    if (!session?.user && !session?.accessToken) return router.push("/login");
    try {
      const response = await bookTour(tourData?.id, selectedGuide?.id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return (
    <>
      <Card className="rounded-md  lg:absolute  p-8 w-full lg:w-[400px] bg-offWhite top-0 right-0">
        <div className=" ">
          <Typography className="tracking-wide text-center py-2 font-medium text-lg uppercase text-textBlack">
            Find a guide by your date
          </Typography>

          <div className="flex flex-col">
            <SelectDate />
          </div>
          <div className="my-4">
            {!selectedGuide && (
              <Select
                onChange={(value) => selectHandler(value)}
                label="Select Your Guide"
                className="py-2"
              >
                {guide &&
                  guide?.map((item) => (
                    <Option
                      key={item?.userName}
                      value={item?.userName}
                      className=" bg-offWhite p-2 my-2"
                    >
                      <div className=" flex items-center gap-3 rounded-md">
                        <Avatar src={item?.profileImage} alt="profile" />
                        <div>
                          <Typography className=" text-offGray font-medium tracking-wide">
                            {item?.fullName}
                          </Typography>
                          <Typography
                            variant="small"
                            className=" text-offGray  tracking-wide"
                          >
                            {`$${item?.price} per/person`}
                          </Typography>
                        </div>
                      </div>
                    </Option>
                  ))}
              </Select>
            )}

            {selectedGuide && (
              <div
                key={selectedGuide?.userName}
                value={selectedGuide?.userName}
                className=" bg-offWhite"
              >
                <Typography className=" border-b border-[#443f3f8c] pb-1">
                  Selected Guide
                </Typography>
                <div className=" flex  items-center gap-3 justify-between mt-3">
                  <div className=" flex items-center  gap-3 ">
                    <Avatar src={selectedGuide?.profileImage} alt="profile" />
                    <div>
                      <Typography className="text-lg text-offGray font-medium tracking-wide">
                        {selectedGuide?.fullName}
                      </Typography>
                      <Typography
                        variant="small"
                        className=" text-offGray  tracking-wide"
                      >
                        {`$${selectedGuide?.price} per/person`}
                      </Typography>
                    </div>
                  </div>

                  <IconButton
                    size="sm"
                    variant="text"
                    className="  bg-offWhite border border-black rounded-full"
                    onClick={() => setSelectedGuide(null)}
                  >
                    <HiOutlineX className=" w-5 h-5" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          <Button
            loading={loading}
            disabled={!selectedGuide}
            onClick={makePayment}
            className="uppercase font-normal text-sm tracking-wide bg-actionBlue"
            fullWidth
          >
            Book a guide
          </Button>
        </div>
      </Card>
    </>
  );
}
