import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import {
  DollarSign,
  CircleEllipsis,
  ShoppingBag,
  Activity,
} from "lucide-react";
import CalenderMenu from "./CalenderMenu";

export default function Sells({ filterby }) {
  const data = [
    {
      title: "Net Income",
      icon: DollarSign,
      amount: 76434,
      change: 53.5,
      increase: true,
    },
    {
      title: "Avr. Order Value",
      icon: Activity,
      amount: 2460,
      change: 23.5,
      increase: true,
    },
    {
      title: "Orders",
      icon: ShoppingBag,
      amount: 743,
      change: 23,
      increase: false,
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-4 gap-6  py-4">
        {data.map((item) => (
          <Card>
            <div
              key={item.title}
              className=" flex justify-between py-3 px-5 items-center border-b-[2px] border-[#CCCCCC]"
            >
              <div className=" flex gap-3 items-center font-bold">
                <item.icon className=" w-7 h-7" />
                <Typography className=" font-semibold">{item.title}</Typography>
              </div>

              <CircleEllipsis className=" float-right" />
            </div>

            <div className="p-6 px-7  flex flex-col justify-center">
              <Typography variant="h4" className=" font-semibold pb-4">
                {item.title !== "Orders" ? "$" : ""}
                {item.title !== "Orders"
                  ? item.amount.toLocaleString()
                  : item.amount.toLocaleString()}
              </Typography>
              <div className=" flex items-center">
                <span>
                  <Typography
                    variant="small"
                    className={`font-medium ${
                      item.increase ? "positive" : "negative"
                    } px-5 mr-3 rounded-2xl`}
                  >
                    {item.increase ? "+" : "-"}
                    {item.change.toFixed(1)}
                  </Typography>
                </span>
                <Typography
                  variant="small"
                  className=" text-sm  font-normal text-dashboard_text"
                >
                  From last period
                </Typography>
              </div>
            </div>
          </Card>
        ))}

        <div className=" grid-cols-1 grid-rows-1">
          <CalenderMenu />
        </div>
      </div>
    </>
  );
}
