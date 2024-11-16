import { socialLinks } from "@/app/constant/constant";
export default function SocialLinks({ rounded }) {
  return (
    <>
      <div
        className={` bg-white p-3  border-gray-200 ${
          rounded ? " rounded-full" : ""
        } flex justify-around items-center`}
      >
        <p className="font-medium  text-textBlack mr-2">Follow</p>
        <div className=" flex justify-center items-center">
          {socialLinks.map((icon) => (
            <a key={icon.id} href={icon.link}>
              {
                <icon.icon className=" w-7 h-7 p-1 mx-[2px] cursor-pointer hover:bg-actionBlue hover:text-white hover:rounded-full hover:duration-300" />
              }
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
