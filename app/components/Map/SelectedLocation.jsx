import {
  Menu,
  MenuHandler,
  MenuList,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import { convertToDataURL } from "@/app/util/helper";
import { useMap } from "react-leaflet";

export default function SelectedLocation({ places, pageType }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLocation = places;

  const map = useMap();
  const openMenu = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const flyHandler = function (e) {
    const coordinates = [e.target.dataset?.lat, e.target.dataset?.lng];
    e.stopPropagation();
    map?.flyTo(coordinates, 17, { duration: 3.5 });
    // closing the menu
    setIsOpen(false);
  };

  return (
    <>
      {selectedLocation?.length > 0 && (
        <Menu open={isOpen} placement="top-start">
          <MenuHandler>
            <div className=" pointer-events-none">
              <div
                className=" normal-case rounded-lg p-0 pointer-events-auto w-[140px]"
                onClick={openMenu}
              >
                <Typography
                  variant="paragraph"
                  className=" bg-offWhite text-[15px] text-offGray flex items-center gap-2 p-2 px-3 rounded-lg shadow-md cursor-pointer"
                >
                  Show Places
                  <HiChevronUp className=" w-5 h-5 text-shadeBlack" />
                </Typography>
              </div>
            </div>
          </MenuHandler>

          <MenuList className=" bg-white shadow-md flex flex-col py-2  gap-2 max-h-[360px]">
            {selectedLocation.map((item) => (
              <div
                data-lng={item?.coordinates[0]}
                data-lat={item?.coordinates[1]}
                onClick={flyHandler}
                className="rounded-md text-offGray bg-offWhite shadow-sm p-2 flex items-center cursor-pointer"
              >
                <div className="pointer-events-none">
                  <img
                    src={convertToDataURL(item.images[0])}
                    alt="location_image"
                    width={60}
                    height={60}
                    className=" rounded-md w-14 h-14"
                  />
                </div>
                <div className=" flex-col flex gap-0.5 px-4 pointer-events-none">
                  <Typography variant="small">Day {item?.dayNumber}</Typography>
                  <Typography variant="small">
                    {item.address.split(",").length > 1
                      ? item.address.split(",").slice(0, 2).join(",")
                      : item.address}
                  </Typography>
                </div>
              </div>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
}
