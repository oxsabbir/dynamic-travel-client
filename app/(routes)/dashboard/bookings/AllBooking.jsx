"use client";
import { Avatar, Input, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Typography, Card, Button } from "@/app/ui/materialExport";
import { HiStar, HiOutlineCalendar } from "react-icons/hi";
import { IoPricetagsOutline } from "react-icons/io5";
import DateManager from "@/app/util/DateManager";
import Link from "next/link";
import Image from "next/image";
import { guideSort } from "@/app/constant/constant";
import Loading from "@/app/ui/Loading";
import { getAllBooking } from "@/app/libs/bookingApi";
import { BookingTable } from "./BookingTable";

export default function AllBooking() {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [acitveSort, setActiveSort] = useState(null);
  let filterType = "complete";
  const manageDate = new DateManager();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getAllBooking();
        console.log(res);
        setBooking(res?.tour);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    };
    getData();
  }, [acitveSort]);

  return (
    <>
      <BookingTable bookingData={booking} />
    </>
  );
}
