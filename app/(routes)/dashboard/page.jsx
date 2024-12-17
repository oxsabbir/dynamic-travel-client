"use client";

import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import Sells from "@/app/components/Dashboard/Overview/Sells";
import Charts from "@/app/components/Dashboard/Overview/Charts";

export default function Overview() {
  const [activeTab, setActiveTab] = useState("last_week");
  const data = [
    {
      label: "Last 24 hours",
      value: "last_day",
    },
    {
      label: "Last Week",
      value: "last_week",
    },
    {
      label: "Last month",
      value: "last_month",
    },
    {
      label: "Last year",
      value: "last_year",
    },
  ];

  return (
    <div className="lg:py-0 py-3 ">
      <div className="flex justify-between flex-col lg:flex-row gap-2 items-center">
        <div className="w-full lg:w-2/3 xl:w-2/5">
          <div className=" lg:hidden">
            <Select
              label="Filter by"
              value={activeTab}
              className=" bg-white"
              onChange={(value) => setActiveTab(value)}
            >
              {data.map((item) => (
                <Option key={item.label} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>

          <div className="lg:block hidden">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50  bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={label}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={
                      activeTab === value ? "text-gray" : "text-[#0000006e]"
                    }
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </div>
      </div>
      <Sells filterby={activeTab} />
      <Charts />
    </div>
  );
}
