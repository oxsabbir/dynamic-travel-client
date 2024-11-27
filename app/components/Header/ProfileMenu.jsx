"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import defaultProfile from "@/public/default_profile.png";
import { signOutAction } from "@/app/action/AuthAction";
import {
  HiOutlineCog,
  HiOutlineUserCircle,
  HiOutlineLogout,
} from "react-icons/hi";
import Loading from "@/app/ui/Loading";

export function ProfileMenu({ signOut, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  user = { name: "Sabbir", image: null, role: "user" };

  const [AuthUser, setAuthUser] = useState(null);
  const [AuthStatus, setAuthStatus] = useState(null);
  const session = useSession();

  useEffect(() => {
    getSession();
    setAuthStatus(session.status);
    if (session.status === "authenticated") {
      setAuthUser(session.data.user);
      setAuthStatus(session.status);
    } else {
      setAuthUser(null);
      setAuthStatus(session.status);
    }
  }, [session.status]);

  return (
    <>
      {session.status === "unauthenticated" && (
        <a
          href="/login"
          className="bg-textBlack text-white hidden md:block hover:duration-300 hover:scale-95 px-8 py-2 rounded-full"
        >
          Join Now
        </a>
      )}
      {session.status === "loading" && (
        <div className="p-2">
          <Spinner className="h-8 w-8 " />
        </div>
      )}
      {AuthStatus === "authenticated" && (
        <Menu placement="bottom-end">
          <MenuHandler>
            <div className="flex cursor-pointer items-center p-1 px-3 rounded-lg">
              <p
                className=" mr-2.5 
              hidden xl:block"
              >
                Welcome Back, {AuthUser?.name?.split(" ")[0]}
              </p>
              <Avatar
                variant="circular"
                alt={"profileImage"}
                className="cursor-pointer border hover:border-transparent transition duration-400 border-actionBlue"
                src={AuthUser?.image || defaultProfile.src}
              />
            </div>
          </MenuHandler>
          <MenuList className="text-shadeBlack">
            <MenuItem className="flex items-center gap-2 pointer-events-none">
              <Typography variant="lead" className="font-medium">
                {AuthUser?.name}
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <HiOutlineUserCircle className="w-6 h-6" />

              <Typography variant="small" className="font-medium">
                My Profile
              </Typography>
            </MenuItem>
            {AuthUser?.role === "admin" && (
              <Link href={"/dashboard"}>
                <MenuItem className="flex items-center gap-2">
                  <HiOutlineCog className=" w-6 h-6" />
                  <Typography variant="small" className="font-medium">
                    Dashboard
                  </Typography>
                </MenuItem>
              </Link>
            )}

            <hr className="my-2 border-blue-gray-50" />
            <MenuItem
              onClick={async () => {
                await signOutAction();
                await getSession();
              }}
              className="flex items-center gap-2 "
            >
              <HiOutlineLogout className=" w-6 h-6" />
              <Typography variant="small" className="font-medium">
                Sign Out
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
}
