import Image from "next/image";
import kidImage from "@/public/kid.png";
import skyForButton from "@/public/sky.jpg";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import Container from "../Extras/Container";

export default function Unleash() {
  return (
    <>
      <Container className={"py-10"}>
        <div>
          <div className="  flex flex-col pb-3 md:gap-12 xl:gap-20 lg:flex-row gap-8 items-center">
            <Image
              src={kidImage.src}
              width={450}
              height={670}
              className=" object-cover w-[570px] h-[600px] rounded-[35px]"
            />

            <div className=" flex text-center justify-center flex-col gap-7">
              <div className="  flex flex-col xl:flex-row items-center gap-4 md:gap-6">
                <h3 className=" text-5xl lg:text-7xl font-bold uppercase tracking-widest">
                  Unleash
                </h3>
                <p className=" text-base w-full font-thin text-textBlack    ">
                  Travelling Is A Wonderfull Way To Explore New Places. Learn
                  About Different Culture And Gain New Exeperience
                </p>
              </div>
              <h3 className="  uppercase text-5xl lg:text-7xl  font-bold">
                Wonderlust with
              </h3>
              <div className="  flex flex-col xl:flex-row-reverse justify-end items-center gap-4 md:gap-6">
                <h3 className=" uppercase text-5xl lg:text-7xl font-bold tracking-widest">
                  Skywings
                </h3>
                <p className="  text-base w-full font-thin text-textBlack  ">
                  Travelling Is A Wonderfull Way To Explore New Places. Learn
                  About Different Culture And Gain New Exeperience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-2 pt-4 md:pt-2">
          <div className=" w-full md:w-2/6 flex  items-center p-7 justify-around  rounded-3xl bg-offWhite">
            <h3 className=" text-actionBlue uppercase font-bold text-4xl lg:text-5xl">
              20% OFF
            </h3>
            <p className=" text-textBlack text-lg font-medium">
              Till 28 September, <br /> 2023
            </p>
          </div>
          <div className=" flex-grow ">
            <Link href={"#"}>
              <div
                style={{
                  backgroundImage: `url(${skyForButton.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="group text-3xl md:text-4xl text-center font-medium p-9  justify-center  rounded-3xl  flex gap-3 items-center"
              >
                <p>Book A Flight Now </p>
                <RiArrowRightLine className="group-hover:translate-x-3 duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
