"use client";
import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { navMenu } from "../../constant/constant";
import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import Container from "../Extras/Container";
import { usePathname } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import { ProfileMenu } from "./ProfileMenu";

export default function Nav() {
  const [isNavShowed, setIsNavShowed] = useState(false);
  const session = useSession();

  const [dropNav, setDropNav] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    // setting up auth state

    let scrollPosition = 0;
    const scrollHandler = function (event) {
      if (scrollPosition < 25 || scrollPosition < window?.scrollY) {
        scrollPosition = window.scrollY;
        setDropNav(false);
      } else if (scrollPosition > window.scrollY) {
        scrollPosition = window.scrollY;
        setDropNav(true);
      }
    };
    if (window) {
      window?.addEventListener("scroll", scrollHandler);
    }
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [session.status]);

  return (
    <>
      <Container>
        <nav className="py-4 ">
          <div className="flex justify-between items-center px-2 md:px-0 relative">
            <a href="/">
              <Image src={logo} height={50} width={125} alt="brand_logo" />
            </a>
            <ul
              className={`gap-3 p-2 ${
                !dropNav
                  ? " absolute bg-white"
                  : "fixed z-[1500] bg-[#000000ae] backdrop-blur-md text-white"
              }  left-1/2 transform -translate-x-1/2 duration-200 rounded-full md:flex hidden`}
            >
              {navMenu.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`hidden md:block px-4 uppercase lg:px-6 py-2 ${
                      pathName.startsWith(link.href)
                        ? "bg-gray-900 text-white"
                        : ""
                    } hover:bg-gray-900 hover:text-offWhite rounded-full hover:duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className=" relative md:hidden w-[60%]">
              {!isNavShowed ? (
                <FiMenu
                  id="nav_open"
                  className={`h-8 w-8 hover:scale-110 float-right hover:duration-75 hover:cursor-pointer md:hidden`}
                  onClick={() => {
                    setIsNavShowed((prev) => !prev);
                  }}
                />
              ) : (
                <FaXmark
                  className={`h-8 w-8 hover:scale-110 float-right hover:duration-75 hover:cursor-pointer md:hidden`}
                  onClick={() => {
                    setIsNavShowed((prev) => !prev);
                  }}
                />
              )}

              <div
                id="nav_menu"
                className={`fadeIn absolute top-10 right-0 z-30 bg-offWhite bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg  ${
                  !isNavShowed ? "hidden" : "block"
                } absolute w-full  p-6 top-0 right-0`}
              >
                <ul className=" flex flex-col gap-4 justify-center  items-center">
                  {navMenu.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className=" text-white px-4 uppercase lg:px-6 py-2 hover:bg-black hover:text-white rounded-full hover:duration-200 "
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ProfileMenu />
          </div>
        </nav>
      </Container>
    </>
  );
}
