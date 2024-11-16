import { oceanImage } from "@/app/constant/constant";
import Image from "next/image";

export default function Places() {
  return (
    <>
      <div className="bg-white rounded-2xl   flex p-2 lg:p-5 pb-3 lg:border-none  md:rounded-b-none md:rounded-tr-none  ">
        <div className=" image-list flex justify-center items-center">
          {oceanImage.map((image, i) => (
            <div
              key={image.id}
              className={`${i > 0 ? "-translate-x-6" : ""} ${
                i === 2 ? "-translate-x-[48px]" : ""
              }`}
            >
              <Image
                src={image.image}
                width={65}
                height={65}
                className="object-cover rounded-full border-[3px] border-offWhite"
              />
            </div>
          ))}
        </div>

        <div className=" -translate-x-4">
          <p className="text-base font-bold pb-1">Awesome places</p>
          <p className="text-sm font-medium text-textBlack">
            Discover The World One <br />
            Adventure At A Time
          </p>
        </div>
      </div>
    </>
  );
}
