"use client";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiOutlineMenu } from "react-icons/hi";
import SideNav from "../Dashboard/SideNav";

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="">
        <Button
          onClick={openDrawer}
          size="sm"
          className=" bg-transparent !shadow-none text-textBlack p-0"
        >
          <HiOutlineMenu className=" w-9 h-9" />
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <SideNav
            closeDrawer={closeDrawer}
            navType="regular"
            type={"mobile"}
          />
        </Drawer>
      </div>
    </>
  );
}
