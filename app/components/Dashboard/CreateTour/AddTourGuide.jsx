"use client";
import {
  MenuHandler,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import GuideList from "../../Tour/TourDetails/GuideList";

export default function AddTourGuide({ registerTour, setValue, guideData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const handleOpen = () => setIsMenuOpen((prev) => !prev);

  registerTour("guides", {
    validate: (value) =>
      (value && value.length > 0) || "Please select at least one tour guide",
  });

  return (
    <>
      <Menu placement="bottom-start" open={isMenuOpen} handler={handleOpen}>
        <MenuHandler>
          <Button className=" hover:shadow-none shadow-none text-start w-full bg-senseWhite rounded-none text-shadeBlack normal-case px-3 font-normal text-sm">
            {guideData?.length > 0
              ? `${guideData?.length} guides selected`
              : "Select tour guides"}
          </Button>
        </MenuHandler>

        <MenuList className="w-[350px] z-[9999] ">
          <GuideList
            registerTour={registerTour}
            setValue={setValue}
            handleMenu={handleOpen}
            guideData={guideData}
          />
        </MenuList>
      </Menu>
    </>
  );
}
