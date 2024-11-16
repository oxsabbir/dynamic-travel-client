import Image from "next/image";
import { oceanImage } from "../../constant/constant";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row justify- items-center   gap-10">
        <div className=" flex flex-col text-center w-full md:w-2/4 lg:flex-row gap-10 items-center">
          <Image
            src={oceanImage[1].image}
            width={120}
            height={120}
            alt="explore"
            className="rounded-full "
          />
          <h3 className=" text-3xl font-bold">
            Explore The Sky <br className=" hidden lg:block" /> With Confidence
          </h3>
        </div>

        <div className=" flex w-full flex-col  lg:w-2/4 lg:flex-row-reverse gap-10  items-center">
          <Image
            src={oceanImage[2].image}
            width={120}
            height={120}
            alt="explore"
            className=" rounded-full"
          />
          <p className="text-textBlack text-center text-lg">
            Travelling Is A Wonderfull Way To Explore New Places. Learn About
            Different Culture And Gain New Exeperience
          </p>
        </div>
      </div>
    </>
  );
}
