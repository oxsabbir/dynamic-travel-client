import { IoWalletOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const data = [
  {
    id: "de1",
    title: "Various Destination",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About Different Culture And Gain New Exeperience`,
    icon: IoEarthOutline,
  },
  {
    id: "de2",
    title: "Everything Is Included",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About Different Culture And Gain New Exeperience`,
    icon: IoShieldCheckmarkOutline,
  },
  {
    id: "de3",
    title: "Affordable Price",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About Different Culture And Gain New Exeperience`,
    icon: IoWalletOutline,
  },
];

export default function Discover() {
  return (
    <>
      <div>
        <div className="  flex justify-center flex-col gap-4 items-center">
          <h3 className=" text-4xl font-bold pb-2 text-center">
            Discover The World From Above
          </h3>
          <p className=" text-sm text-textBlack md:w-[40%] text-center">
            Travelling Is A Wonderfull Way To Explore New Places. Learn About
            Different Culture And Gain New Exeperience
          </p>
        </div>

        <div className="  flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 mt-6 lg:p-8 lg:px-14">
          {data.map((item) => (
            <div
              className="flex flex-col items-center  px-5  text-center gap-3"
              key={item.id}
            >
              <item.icon className=" w-16 h-16 p-3 text-actionBlue bg-offWhite rounded-full" />
              <h3 className="text-2xl font-bold w-full xl:w-[40%] py-2">
                {item.title}
              </h3>
              <p className=" text-sm text-textBlack">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
