"use client";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { applyForGuide } from "@/app/libs/guidesApi";
import { useRouter } from "next/navigation";

export default function BecomeGuide({ readyForGuide, role }) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(readyForGuide, role);

  const handleOpen = () => setOpen((prev) => !prev);

  const applyHandler = async function () {
    try {
      setLoading(true);
      const res = await applyForGuide(price);
      handleOpen();
      router.refresh();
    } catch (error) {
      console.log(error);
      setLoading(false);

      throw error;
    }
    setLoading(false);
  };

  return (
    <>
      {role === "user" && (
        <Menu
          dismiss={{
            itemPress: false,
          }}
          open={open}
          handler={handleOpen}
        >
          <MenuHandler>
            <Button
              disabled={readyForGuide && role === "user"}
              className=" py-1 px-4  bg-actionBlue  text-white"
            >
              {readyForGuide && role !== "guide" ? "Pending" : "Become a Guide"}
            </Button>
          </MenuHandler>
          <MenuList>
            <Input
              type="number"
              onChange={(event) => setPrice(+event.target.value)}
              label="Price per/person"
              placeholder="ex. $50"
              containerProps={{
                className: "mb-2",
              }}
            />
            <Button
              onClick={applyHandler}
              loading={loading}
              disabled={!price}
              className=" bg-actionBlue px-3 py-2 w-full"
            >
              Apply
            </Button>
          </MenuList>
        </Menu>
      )}
    </>
  );
}
