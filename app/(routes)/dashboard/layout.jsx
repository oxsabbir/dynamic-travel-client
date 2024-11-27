import SideNav from "@/app/components/Dashboard/SideNav";
import MobileMenu from "@/app/components/Dashboard/MobileMenu";
import { ProfileMenu } from "@/app/components/Header/ProfileMenu";
import LargeHeading from "@/app/components/Dashboard/LargeHeading";

export default function layout({ children }) {
  return (
    <>
      <div className="bg-offWhite w-full min-h-screen md:flex">
        <div className="hidden md:block h-full">
          <SideNav />
        </div>
        <div className=" md:hidden ">
          <MobileMenu />
        </div>
        <div className=" p-3 py-0 md:p-4   w-full h-screen overflow-auto">
          <div className=" hidden lg:flex items-center border-b mb-2 justify-between py-1 ">
            <LargeHeading />
            <ProfileMenu />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
