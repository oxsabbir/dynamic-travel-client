"use client";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import { HiOutlinePencilAlt, HiOutlineStar } from "react-icons/hi";

export function RatingForm() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 shadow-md font-normal tracking-wide bg-actionBlue "
      >
        <HiOutlinePencilAlt className="w-5 h-5 " />
        Write a review
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] ">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" className=" uppercase text-center ">
              Give us a rating
            </Typography>
            <Textarea label="Write a review" />
            <div className=" bg-senseWhite rounded-md p-2">
              <div>
                <Typography
                  variant="paragraph"
                  className=" text-textBlack tracking-wide text-lg p-3 text-center"
                >
                  Rate this out of 5 by your experience
                </Typography>
              </div>
              <div className=" flex items-center justify-center  gap-3 py-3">
                {new Array(5).fill(1).map((item, i) => (
                  <IconButton variant="text" key={i} className=" rounded-full">
                    <HiOutlineStar
                      className={`w-12 h-12 p-1 text-orange-400 `}
                      strokeWidth={1}
                    />
                  </IconButton>
                ))}
              </div>
              <div className=" p-2 flex items-start justify-between ">
                <Typography variant="small" className="text-sm text-textBlack">
                  Bad
                </Typography>
                <Typography variant="small" className=" text-sm text-textBlack">
                  Excellent
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              fullWidth
              className="flex items-center justify-center gap-2 shadow-md font-normal text-sm tracking-wide bg-actionBlue"
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
