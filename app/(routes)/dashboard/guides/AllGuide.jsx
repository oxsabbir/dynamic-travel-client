"use client";
import getAllGuides from "@/app/libs/getAllGuide";
import { Input, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Typography, Card, Button } from "@/app/ui/materialExport";
import { HiTrash } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { guideSort } from "@/app/constant/constant";
import Loading from "@/app/ui/Loading";
import { acceptGuide, deleteGuide, rejectGuide } from "@/app/libs/guidesApi";
import { useRouter } from "next/navigation";
import { DeleteModal } from "@/app/ui/DeleteModal";

export default function AllGuide() {
  const [guides, setGuides] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [acitveSort, setActiveSort] = useState(null);

  const [query, setQuery] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [idForDelete, setIdForDelete] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handlerDeleteOpen = (event) => {
    const id = event?.target?.id || null;
    setIdForDelete(id);
    setOpenDelete((prev) => !prev);
  };

  const [buttonLoader, setButtonLoader] = useState({
    type: null,
    loading: false,
    id: null,
  });

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getAllGuides(query, acitveSort, undefined, isPending);
        setGuides(res?.guide);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    };
    getData();
  }, [isPending, acitveSort, query, refetch]);

  const pendingHandler = async function (actionType, guideId) {
    try {
      setButtonLoader({ type: actionType, loading: true, id: guideId });
      const res =
        actionType === "accept"
          ? await acceptGuide(guideId)
          : await rejectGuide(guideId);
      setRefetch((prev) => !prev);
    } catch (error) {
      setButtonLoader({ type: null, loading: false, id: null });
    }
    setButtonLoader({ type: null, loading: false, id: null });
  };

  const guideDeleteHandler = async function () {
    try {
      setDeleteLoading(true);
      const res = await deleteGuide(idForDelete);
      setRefetch((prev) => !prev);

      handlerDeleteOpen();
    } catch (error) {
      setDeleteLoading(false);

      console.log(error);
    }
    setDeleteLoading(false);
  };

  return (
    <>
      <DeleteModal
        handleOpen={handlerDeleteOpen}
        open={openDelete}
        title={"Guide"}
        loading={deleteLoading}
        confirmHandler={guideDeleteHandler}
      />
      <div className=" pb-3 rounded-sm flex flex-col-reverse  gap-4 lg:flex-row items-start  justify-between">
        <div className=" flex gap-4 items-center">
          <div className="flex flex-col gap-6">
            <Select
              onChange={(value) => setActiveSort(value)}
              color="gray"
              label="Sort By"
              variant="outlined"
            >
              {guideSort.map((item) => (
                <Option key={item.id} value={item.value}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </div>
          <Button
            onClick={() => setIsPending((prev) => !prev)}
            variant="sm"
            className={`${
              isPending
                ? "bg-blue-300 tracking-wide font-medium shadow-sm"
                : " bg-blue-500 tracking-wide font-medium shadow-sm"
            }`}
          >
            {isPending ? "Cancel" : "Pending guide"}
          </Button>
        </div>
        <div className="relative mt-4 md:mt-0 flex w-full lg:max-w-[24rem]">
          <Input
            type="text"
            label="Search here"
            className="pr-20"
            onChange={(e) =>
              setTimeout(() => {
                setQuery(e.target.value);
              }, 1000)
            }
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            variant="gradient"
            className="!absolute right-1 top-1 rounded bg-transparent"
          >
            <IoSearch className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div>
        {loading && (
          <div className="h-[450px]">
            <Loading />
          </div>
        )}
        {!loading && guides?.length < 1 && (
          <div className=" py-10">
            <Typography className=" tracking-wide text-offGray font-normal text-center">
              No {isPending ? "pending guide" : "guide"} found
            </Typography>
          </div>
        )}
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {guides?.length > 0 &&
            !loading &&
            guides?.map((item) => (
              <Card key={item?.userName}>
                <div className=" rounded-md p-4">
                  <div>
                    <Image
                      src={item?.profileImage}
                      alt="guides-profile"
                      width={350}
                      height={230}
                      className=" w-full h-[240px] object-cover rounded-md"
                    />
                  </div>
                  <div className=" flex justify-between items-center">
                    <div className=" pt-3">
                      <Typography className=" font-medium text-lg text-offBlack tracking-wide">
                        {item?.fullName}
                      </Typography>
                      <Typography className=" font-thin text-sm text-offBlack tracking-wide">
                        ${item?.price} per/person
                      </Typography>
                    </div>
                    {isPending ? (
                      <div className=" flex items-center gap-1 self-end">
                        <Button
                          id={item?.id}
                          onClick={(e) => pendingHandler("reject", e.target.id)}
                          loading={
                            buttonLoader.type === "reject" &&
                            buttonLoader.id === item?.id &&
                            buttonLoader.loading
                          }
                          size="sm"
                          className=" flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-blue-gray-500"
                        >
                          Reject
                        </Button>

                        <Button
                          id={item?.id}
                          onClick={(e) => pendingHandler("accept", e.target.id)}
                          loading={
                            buttonLoader.type === "accept" &&
                            buttonLoader.id === item?.id &&
                            buttonLoader.loading
                          }
                          size="sm"
                          className="flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-actionBlue"
                        >
                          Accept
                        </Button>
                      </div>
                    ) : (
                      <div className=" flex items-center gap-1 self-end">
                        <Button
                          size="sm"
                          id={item?.id}
                          onClick={handlerDeleteOpen}
                          className=" flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-blue-gray-500"
                        >
                          <HiTrash className="w-4 h-4 pointer-events-none" />
                        </Button>

                        <Link href={`/profile/${item?.userName}`}>
                          <Button
                            size="sm"
                            className="flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-actionBlue"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
