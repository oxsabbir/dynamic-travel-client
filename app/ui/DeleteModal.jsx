"use client";

import React, { useState } from "react";
import {
  Dialog,
  Card,
  Typography,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import { HiOutlineTrash } from "react-icons/hi";

export function DeleteModal({ open, handleOpen, confirmHandler }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xs">
        <Card className=" p-5 flex flex-col items-center gap-2">
          <HiOutlineTrash className=" w-16 h-16 text-red-400 bg-red-50 p-3 rounded-full" />
          <Typography className="text-2xl font-bold tracking-wider py-2 text">
            Delete Tour
          </Typography>
          <Typography className=" text-center text-base">
            You're going to delete the "Tour" <br /> Are you sure?
          </Typography>
          <CardFooter className=" px-5 pb-1 w-full flex items-center gap-4">
            <Button
              onClick={handleOpen}
              fullWidth
              className=" p-3 tracking-wider px-1 rounded-3xl normal-case font-normal text-base bg-senseWhite text-textBlack"
            >
              No, Keep it.
            </Button>
            <Button
              onClick={confirmHandler}
              fullWidth
              className=" p-3 tracking-wider text-center px-1 rounded-3xl normal-case font-normal text-base bg-red-400 text-white"
            >
              Yes, Delete!
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
