"use client";
import { adminNavMenu } from "@/app/constant/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BrandLogo from "@/public/logo.svg";
import { navMenu } from "@/app/constant/constant";

export default function SideNav({ type, closeDrawer, navType = "admin" }) {
  const pathName = usePathname();
  let menuList = navType === "admin" ? adminNavMenu : navMenu;
  return (
    <>
      <div
        className={`${
          type === "mobile" ? "w-full" : "lg:min-w-[315px]  "
        }   min-h-screen bg-white p-4 lg:shadow-xl lg:rounded-tr-3xl lg:rounded-br-3xl`}
      >
        <div className=" pb-2 border-b border-[#D5D5D5]">
          <div className="py-4">
            <Link onClick={closeDrawer} href={"/"}>
              <img src={BrandLogo.src} alt="logo" className=" w-40 h-auto" />
            </Link>
          </div>
        </div>
        <ul className=" pt-4">
          {menuList.map((menu) => (
            <li key={menu.id}>
              <Link
                onClick={closeDrawer}
                href={menu.link}
                variant="paragraph"
                className={`flex text-center ${
                  type === "mobile" ? "text-base" : "flex-col text-lg"
                } lg:flex-row  lg:gap gap-2 lg:text-lg font-medium tracking-wider text-blue-gray-900 items-center hover:bg-actionBlue my-1 ${
                  (
                    menu.link?.split("/").length < 3
                      ? pathName === menu.link
                      : pathName.startsWith(menu.link)
                  )
                    ? "bg-actionBlue text-white rounded-md"
                    : "text-admin_text"
                } hover:text-white transition  p-2.5 hover:rounded-md  `}
              >
                {navType === "admin" && (
                  <menu.icon className="w-6 h-6 -translate-y-[0 px]" />
                )}
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
