"use client";
import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { navMenu } from "../../constant/constant";
import { useEffect, useState } from "react";
import Container from "../Extras/Container";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ProfileMenu } from "./ProfileMenu";
import MobileNav from "./MobileNav";

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
        <nav className="py-4  ">
          <div className="flex justify-between items-center px-2 md:px-0 ">
            <div className=" md:hidden">
              <MobileNav />
            </div>
            <a href="/">
              <Image
                src={logo}
                height={50}
                width={125}
                alt="brand_logo"
                className=" w-[100px] md:w-[120px] h-auto"
              />
            </a>
            <ul
              className={`gap-3 p-2 ${
                !dropNav
                  ? " absolute "
                  : "fixed z-[1500] bg-[#000000ae] backdrop-blur-md text-white"
              }  left-1/2 transform -translate-x-1/2 duration-200 rounded-full md:flex hidden`}
            >
              {navMenu.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className={`hidden md:block px-4 uppercase lg:px-6 py-2 ${
                      pathName.startsWith(link.link)
                        ? "bg-gray-900 text-white"
                        : ""
                    } hover:bg-gray-900 hover:text-offWhite rounded-full hover:duration-200`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <ProfileMenu />
          </div>
        </nav>
      </Container>
    </>
  );
}
