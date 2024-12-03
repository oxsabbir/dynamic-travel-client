import { FaCaretRight } from "react-icons/fa";

import Link from "next/link";
import TourSlider from "../Extras/TourSlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { journeyData } from "../../constant/constant";
import { getAllTours } from "../../libs/getAllTours";

export default async function Destination() {
  const allTours = await getAllTours();

  return (
    <>
      <section className=" py-10 container">
        <TourSlider bestTours={allTours} />
        <div className=" flex flex-col items-center py-3">
          <h3 className=" text-4xl text-center pb-4 font-bold text-black">
            Journey To The Sky Made Simple!
          </h3>
          <p className=" text-sm px-4 text-textBlack text-center tracking-wider w-full md:w-3/6 lg:w-2/6 ">
            Travelling Is A Wonderfull Way To Explore New Places. Learn About
            Different Culture And Gain New Exeperience
          </p>
        </div>

        <div
          className="  py-4 md:py-10 flex flex-col lg:flex-row 
       md:items-end justify-center gap-5 md:gap-6  "
        >
          {journeyData.map((data) => (
            <div
              key={data.id}
              className="group hover:bg-actionBlue bg-offWhite relative duration-500 text-white p-12  rounded-[30px] overflow-hidden   shadow-slate-600 drop-shadow-md flex flex-col gap-3"
            >
              <div
                style={{
                  backgroundImage: `url(${data.image.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" absolute -top-24 -right-16 w-[240px] rounded-full h-[240px]  "
              ></div>

              <data.icon className=" w-16 h-16 p-4 group-hover:border-white group-hover:text-white rounded-full border-textBlack border-[2px]  text-textBlack" />

              <h3 className=" text-2xl font-medium group-hover:text-white text-textBlack w-2/4 group-hover:pt-3 pt-3 ">
                {data.title}
              </h3>

              <p className=" text-sm w-4/5 group-hover:text-white text-textBlack font-normal  leading-6 duration-300 ">
                {data.description}
              </p>

              <Link
                href={"#"}
                className="pt-6 flex  items-center text-base font-thin group-hover:text-offWhite text-actionBlue uppercase tracking-wide gap-2"
              >
                Learn More <FaCaretRight />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
