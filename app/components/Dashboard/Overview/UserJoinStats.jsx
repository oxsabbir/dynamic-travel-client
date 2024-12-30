"use client";
import { Card } from "@material-tailwind/react";

export default function UserJoinStats() {
  return (
    <>
      <Card className=" p-4 flex justify-center h-full ">
        <div className=" pb-1 flex items-center border-b border-[#E4E5E7] justify-between">
          <h4 className=" text-sm text-fade_text font-medium ">
            Overall User Activity
          </h4>
          <select
            className="p-1 hover:cursor-pointer  focus:border-none text-[#0F2552] text-sm font-semibold flex !outline-none "
            name="dropdown"
          >
            <option selected className=" p-3 " value="admin">
              Lines
            </option>
            <option className=" p-3 " value="provider">
              Bars
            </option>
          </select>
        </div>
      </Card>
    </>
  );
}
