import hero from "@/public/hero.png";
import plane from "@/public/plane.png";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Action from "./Action";
import { oceanImage } from "../../constant/constant";
import KnowMore from "../Extras/KnowMore";
import Places from "../Extras/Places";

export default function Hero() {
  return (
    <>
      <div className="px-7 relative flex justify-center items-center flex-col lg:flex-row  ">
        <div className=" p-4 lg:absolute container z-20 ">
          <p className=" uppercase text-sm font-medium text-textBlack">
            Elevate your travel journey
          </p>
          <h2 className=" lg:text-7xl lg:leading-[1.2] text-4xl py-3 font-semibold leading-[1.1] ">
            Exeperience <br /> The Magic Of <br /> Flight!
          </h2>
          <div className=" flex py-6 gap-4">
            <Action href={"/booking"}>Book A Trip Now</Action>

            <div className="p-[12px] cursor-pointer  bg-offWhite rounded-full">
              <FaPlayCircle className="w-7 h-7 text-center rounded-full text-actionBlue box-border" />
            </div>
          </div>
        </div>

        <div
          className="lg:h-[780px] md:h-[480px] h-[360px] rounded-3xl"
          style={{
            backgroundImage: `url(${hero.src})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="p-2 h-full flex items-center">
            <Image
              alt="plane"
              src={plane}
              className="h-auto lg:w-[60%] md:w-[65%] w-[85%] absolute float-right right-0"
            />
          </div>
        </div>

        <div className="lg:absolute relative bottom-0 right-0  lg:pr-7">
          <div className=" flex lg:flex-col flex-col-reverse lg:py-0 py-6">
            <div className=" flex flex-col-reverse lg:gap-0 gap-2">
              <KnowMore />
              <Places />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
