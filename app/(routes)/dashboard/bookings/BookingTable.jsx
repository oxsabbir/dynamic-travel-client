"use client";

import {
  HiOutlinePencil as PencilIcon,
  HiOutlineUserAdd as UserPlusIcon,
  HiOutlineSearch as MagnifyingGlassIcon,
  HiOutlineChevronDown as ChevronUpDownIcon,
} from "react-icons/hi";

import DateManager from "@/app/util/DateManager";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Loading from "@/app/ui/Loading";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
  {
    label: "Completed",
    value: "complete",
  },
];

const TABLE_HEAD = [
  "User",
  "Tour",
  "Amount",
  "Guide",
  "Status",
  "Booking Date",
];

const manageData = new DateManager();

export function BookingTable({ bookingData, loading, handleSort }) {
  return (
    <>
      <Card className="maxhfu w-full my-2">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-6">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <CardBody className="overflow-auto px-0">
          {loading && (
            <div className=" h-[400px]">
              <Loading />
            </div>
          )}
          {!loading && bookingData?.length < 1 && (
            <div className=" p-6">
              <Typography className="  text-offGray">
                No booking data found
              </Typography>
            </div>
          )}

          {!loading && bookingData?.length > 0 && (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookingData?.map((item, index) => {
                  const isLast = index === bookingData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={item?.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={item?.user?.profileImage}
                            alt={item?.user?.userName}
                            size="md"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item?.user?.fullName}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {item?.user?.userName}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3  max-w-[250px] ">
                          <Avatar
                            src={item?.tour?.coverImage}
                            alt={"tour-cover-image"}
                            variant="rounded"
                            size="md"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis "
                            >
                              {item?.tour?.title}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              ${item?.tour?.price}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="green"
                            className="font-medium tracking-wider"
                          >
                            ${item?.price}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={item?.guide?.profileImage}
                            alt={item?.guide?.userName}
                            size="md"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item?.guide?.fullName}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              ${item?.guide?.price} per/person
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="md"
                            variant="gradient"
                            value={`Paid`}
                            color="green"
                            className=" tracking-wider font-medium"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {manageData.getDaysLeft(item?.createdAt).dateFormat}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
