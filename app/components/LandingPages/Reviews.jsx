import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { oceanImage } from "../../constant/constant";

const rating = 4;

export default function Reviews() {
  return (
    <>
      <div className=" ">
        <h3 className=" text-center text-4xl font-bold pb-10">
          Loved By Over Thousand Travelers
        </h3>
        <div className=" flex  flex-col  items-center justify-center gap-4 lg:gap-8 lg:flex-row">
          {oceanImage.map((item) => (
            <div key={item.id}>
              <div className="group hover:bg-actionBlue duration-300 flex flex-col gap-3 p-3  rounded-3xl bg-offWhite shadow-md ">
                <div className=" bg-white p-6 rounded-3xl shadow-sm">
                  <div className="flex gap-3 pb-2 text-actionBlue">
                    <FaStar className=" w-8 h-8 p-1" />
                    <FaStar className=" w-8 h-8 p-1" />
                    <FaStar className=" w-8 h-8 p-1" />
                    <FaStar className=" w-8 h-8 p-1" />
                  </div>

                  <p className=" text-lg  text-textBlack font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae expedita, doloribus consequatur eveniet excepturi ex,
                    eaque modi, dolore magnam...
                  </p>
                </div>

                <div className=" flex items-center px-8 gap-4">
                  <Image
                    src={item.image}
                    width={60}
                    height={60}
                    alt="item"
                    className=" rounded-full "
                  />
                  <div className=" group-hover:text-white py-3">
                    <h3 className=" text-lg font-medium">Sabbir Hossain</h3>
                    <p className=" text-sm group-hover:text-white text-textBlack">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
