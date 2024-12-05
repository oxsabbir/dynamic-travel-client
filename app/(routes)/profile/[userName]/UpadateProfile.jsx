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
import { updateProfileData } from "@/app/libs/authenticate";
import { useRouter } from "next/navigation";

import { HiOutlinePencilAlt, HiOutlinePlus } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { data } from "autoprefixer";

export default function UpdateProfile({ userData }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const formData = watch();
  const { data: session, update } = useSession();

  const router = useRouter();

  useEffect(() => {
    const updatableValue = ["fullName", "profileImage", "bio", "email"];
    updatableValue.map((item) => {
      if (item === "profileImage") {
        setValue(item, [userData[item]]);
      } else {
        setValue(item, userData[item]);
      }
    });
  }, [userData]);

  const handleOpen = () => setOpen((prev) => !prev);

  const updateHandler = async function (inputData) {
    console.log(session);
    await update({
      ...session,
      user: {
        ...session.user,
      },
    });
    const formData = new FormData();
    for (let item in inputData) {
      if (item === "profileImage") {
        formData.append(item, inputData[item][0]);
      } else {
        formData.append(item, inputData[item]);
      }
    }

    try {
      const data = await updateProfileData(formData);
      const user = data?.userData;

      await update({
        ...session,
        user: {
          ...session.user,
          email: user?.email,
          name: user?.fullName,
          image: user?.profileImage,
        },
      });

      router.refresh();

      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

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
                src={convertToDataURL(
                  formData?.profileImage?.length > 0
                    ? formData?.profileImage[0]
                    : userData?.profileImage
                )}
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
                  validate: {
                    minFile: (image) =>
                      (image && image.length >= 1) ||
                      "Please select a profile image.",
                  },
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
                {...register("fullName", {
                  required: "Please insert your fullname",
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
                  required: "Please insert your email",
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
                label="Bio"
                placeholder=""
                {...register("bio", {
                  required: "Please enter your bio",
                  maxLength: {
                    value: 160,
                    message: "Bio cannot exceed 160 characters",
                  },
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
              disabled={!isValid}
              loading={isSubmitting}
              className="bg-actionBlue w-full rounded-lg mt-2 font-medium shadow-none normal-case text-white text-[15px] tracking-wide"
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
