"use client";

import { Dialog, Card, Typography, CardFooter } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import { HiOutlineTrash } from "react-icons/hi";

export function DeleteModal({
  open,
  handleOpen,
  confirmHandler,
  title,
  loading,
}) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xs">
        <Card className=" p-5 flex flex-col items-center gap-2">
          <HiOutlineTrash className=" w-16 h-16 text-red-400 bg-red-50 p-3 rounded-full" />
          <Typography className="text-2xl font-bold tracking-wider py-2 text">
            Delete {title}
          </Typography>
          <Typography className=" text-center text-base">
            You're going to delete the "{title}" <br /> Are you sure?
          </Typography>
          <CardFooter className=" p-0 py-4 md:px-4 pb-1 w-full flex items-center gap-4">
            <Button
              onClick={handleOpen}
              fullWidth
              className=" p-3 tracking-wider  rounded-3xl normal-case font-normal text-base bg-senseWhite text-textBlack"
            >
              No, Keep it.
            </Button>
            <Button
              onClick={confirmHandler}
              loading={loading}
              fullWidth
              className=" p-3 tracking-wider text-center  rounded-3xl normal-case font-normal text-base bg-red-400 text-senseWhite"
            >
              Yes, Delete!
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
