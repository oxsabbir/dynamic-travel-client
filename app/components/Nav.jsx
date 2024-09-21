"use client";
import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { navMenu } from "../constant/constant";
import { useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import Container from "./extra/Container";

export default function Nav() {
  const [isNavShowed, setIsNavShowed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Container>
        <nav className="py-6">
          <div className="flex justify-between items-center px-2 md:px-0">
            <a href="/">
              <Image src={logo} height={50} width={125} alt="Brand logo" />
            </a>
            <ul className="gap-3 px-4 rounded-full  md:flex hidden">
              {navMenu.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className=" text-black hidden md:block px-4 uppercase lg:px-6 py-2 hover:bg-black hover:text-white rounded-full hover:duration-200 "
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

            {!isLoggedIn ? (
              <a
                href="/register"
                className="bg-textBlack text-white hidden md:block hover:duration-300 hover:scale-95 px-8 py-2 rounded-full"
              >
                Join Now
              </a>
            ) : (
              <div className=" flex gap-3 items-center ">
                <Typography variant="paragraph" color="inherit">
                  Welcome {"Sabbir,"}
                </Typography>
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
              </div>
            )}
          </div>
        </nav>
      </Container>
    </>
  );
}
