import SocialLinks from "./SocialLinks";
import { FaArrowRight } from "react-icons/fa";

export default function KnowMore() {
  return (
    <>
      <div className="  flex justify-end flex-row gap-2 md:gap-0 w-full">
        <SocialLinks />
        <div className="flex bg-white relative items-center w-full md:w-3/5 gap-2 group hover:cursor-pointer justify-around   py-3 sm:mt-0">
          <p className=" text-lg font-bold">Know More</p>
          <FaArrowRight className="p-1.5 h-7 w-7 group-hover:translate-x-1 group-hover:duration-300  rounded-full bg-actionBlue  text-plainWhite box-border" />
        </div>
      </div>
    </>
  );
}
