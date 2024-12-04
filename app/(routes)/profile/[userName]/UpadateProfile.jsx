"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  Button,
  DialogBody,
  IconButton,
  Avatar,
  Textarea,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import { convertToDataURL } from "@/app/util/helper";
import { useForm } from "react-hook-form";

import { HiOutlinePencilAlt, HiOutlinePlus } from "react-icons/hi";

export default function UpdateProfile({ userData }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {}, [userData]);

  const handleOpen = () => setOpen((prev) => !prev);

  const updateHandler = async function (inputData) {
    console.log(inputData);
  };
  console.log(userData);

  return (
    <>
      <IconButton
        size="sm"
        variant="text"
        className=" ml-0 lg:ml-2"
        onClick={handleOpen}
      >
        <HiOutlinePencilAlt className=" w-6 h-6 text-offBlack" />
      </IconButton>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogBody className=" ">
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="w-full flex flex-col lg:p-2 gap-3 items-center justify-center"
          >
            <div className=" relative">
              <Image
                src={userData?.profileImage}
                alt="profile-Image"
                width={250}
                height={250}
                className="h-[220px]  w-[220px] object-cover border-[8px] border-[#b6b6b64c] rounded-full "
              />

              <label htmlFor="profileImage">
                <div className="absolute bottom-4 right-4 p-2">
                  <HiOutlinePlus className=" w-8 h-8 p-1 text-offWhite bg-offBlack  rounded-full" />
                </div>
              </label>
            </div>
            <div>
              <input
                {...register("profileImage", {
                  required: "Insert your profileImage",
                })}
                type="file"
                accept="*/images"
                className="hidden"
                id="profileImage"
                name="profileImage"
              />

              {errors?.profileImage && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-center text-red-600 my-1"
                >
                  {errors.profileImage?.message}
                </Typography>
              )}
            </div>
            <div className="w-full ">
              <Input
                id="fullname"
                color="gray"
                size="lg"
                type="text"
                name="fullname"
                {...register("fullname", {
                  required: "Insert your fullname",
                })}
                label="Full Name"
                placeholder="Enter your name"
              />
              {errors?.fullname && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 my-1"
                >
                  {errors.fullname?.message}
                </Typography>
              )}
            </div>
            <div className="w-full">
              <Input
                id="email"
                color="gray"
                size="lg"
                type="text"
                name="email"
                {...register("email", {
                  required: "Insert your email",
                })}
                label="Email"
                placeholder="Enter your email"
              />
              {errors?.email && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 my-1"
                >
                  {errors.email?.message}
                </Typography>
              )}
            </div>
            <div className=" w-full">
              <Textarea
                maxLength={160}
                label="Bio"
                placeholder=""
                {...register("bio", {
                  required: "Insert your bio",
                })}
              />

              {errors?.bio && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 my-1"
                >
                  {errors.bio?.message}
                </Typography>
              )}
            </div>

            <Button
              className="bg-actionBlue w-full rounded-lg mt-2 font-medium shadow-none normal-case text-white text-[15px] tracking-wide"
              loading={loading}
              type="submit"
            >
              Update
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
