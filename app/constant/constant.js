import ocean1 from "@/public/ocean1.png";
import ocean2 from "@/public/ocean2.png";
import ocean3 from "@/public/ocean3.png";

import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { IoLocationOutline, IoTicketOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";

export const navMenu = [
  {
    id: "a1",
    title: "About",
    link: "/about",
  },
  {
    id: "a2",
    title: "Tour",
    link: "/tour",
  },
  {
    id: "a3",
    title: "Package",
    link: "/package",
  },
  {
    id: "a4",
    title: "Contact",
    link: "/contact",
  },
];

export const oceanImage = [
  {
    id: "o1",
    image: ocean1,
  },
  {
    id: "o2",
    image: ocean2,
  },
  {
    id: "o3",
    image: ocean3,
  },
];

export const socialLinks = [
  {
    id: "i1",
    icon: FaFacebook,
    link: "#",
  },
  {
    id: "i2",
    icon: FaInstagram,
    link: "#",
  },
  {
    id: "i3",
    icon: RiTwitterXFill,
    link: "#",
  },
  {
    id: "i4",
    icon: FaGithub,
    link: "#",
  },
];

export const journeyData = [
  {
    id: "c1",
    image: ocean1,
    icon: IoLocationOutline,
    title: "Find Your Destination",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
  {
    id: "c2",
    image: ocean2,
    icon: IoTicketOutline,
    title: "Book Your Ticket",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
  {
    id: "c3",
    image: ocean3,
    icon: CiCreditCard2,
    title: "Pay & Start Journey",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
];

export const footerData = [
  {
    title: "Company",
    links: [
      {
        id: "c1",
        title: "About Us",
        link: "#",
      },
      {
        id: "c2",
        title: "Tour Guide",
        link: "#",
      },
      {
        id: "c3",
        title: "Package",
        link: "#",
      },
      {
        id: "c4",
        title: "Contact",
        link: "#",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        id: "r1",
        title: "Free eBooks",
        link: "#",
      },
      {
        id: "r2",
        title: "Community",
        link: "#",
      },
      {
        id: "r3",
        title: "Blogs",
        link: "#",
      },
      {
        id: "r4",
        title: "Safety Guidelines",
        link: "#",
      },
    ],
  },
  {
    title: "Extra Links",
    links: [
      {
        id: "e1",
        title: "Customer Support",
        link: "#",
      },
      {
        id: "e2",
        title: "Terms & Conditions",
        link: "#",
      },
      {
        id: "e3",
        title: "Privacy Policy",
        link: "#",
      },
    ],
  },
];

export const filterPrice = [
  {
    id: "a1",
    price: "More than $6000",
    value: "min_price=6000",
  },
  {
    id: "a2",
    price: "More than $4000",
    value: "min_price=4000",
  },
  {
    id: "a3",
    price: "Less than $2000",
    value: "max_price=2000",
  },
  {
    id: "a4",
    price: "Less than $1500",
    value: "max_price=1500",
  },
];

export const filterRatings = [
  {
    id: "rate4.5",
    rate: "4.5 and above",
    value: "min_ratings=4.5",
  },
  {
    id: "rate3.5",
    rate: "3.5 and above",
    value: "min_ratings=3.5",
  },
  {
    id: "a3l",
    rate: "3.0 and above",
    value: "min_ratings=3.0",
  },
  {
    id: "ratebelow",
    rate: "3.0 and below",
    value: "max_ratings=3.0",
  },
];

export const filterSort = [
  {
    id: "sort1",
    title: "Latest",
    value: "sort=latest",
  },
  {
    id: "sort2",
    title: "Top Rated",
    value: "sort=top_rated",
  },
  {
    id: "sort3",
    title: "Most Reviewed",
    value: "sort=most_reviewed",
  },
];

import {
  HiOutlineHome,
  HiOutlineGlobe,
  HiOutlineFlag,
  HiOutlineLogout,
  HiOutlineCog,
  HiOutlineMap,
  HiOutlineChartBar,
} from "react-icons/hi";

export const adminNavMenu = [
  {
    id: "ad0",
    title: "Overview",
    link: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    id: "ad1",
    title: "Manage Tours",
    link: "/dashboard/tour-management",
    icon: HiOutlineGlobe,
  },
  {
    id: "ad2",
    title: "Manage Guides",
    link: "/dashboard/guides",
    icon: HiOutlineMap,
  },
  {
    id: "ad3",
    title: "Bookings",
    link: "/dashboard/bookings",
    icon: HiOutlineChartBar,
  },
  {
    id: "ad4",
    title: "Settings",
    link: "/dashboard/settings",
    icon: HiOutlineCog,
  },
  {
    id: "ad5",
    title: "Sign out",
    link: "/dashboard/signout",
    icon: HiOutlineLogout,
  },
];
