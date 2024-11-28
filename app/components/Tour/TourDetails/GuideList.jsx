"use client";
import {
  Avatar,
  Typography,
  Spinner,
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import getAllGuides from "@/app/libs/getAllGuide";

export default function GuideList({ setValue, guideData, handleMenu }) {
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();
  const [selectedGuide, setSelectedGuide] = useState(guideData || []);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const getData = async () => {
      if (page > 1) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      try {
        const response = searchQuery
          ? await getAllGuides(searchQuery, page)
          : await getAllGuides(undefined, page);
        setPageInfo(response?.pagination);
        if (response.guide && page > 1) {
          setGuide((prev) => [...prev, ...response.guide]);
          setLoadingMore(false);
        } else {
          setGuide(response.guide);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setLoadingMore(false);
        throw error;
      }
    };
    getData();
  }, [searchQuery, page]);

  const loadMoreHandler = function () {
    setPage((prev) => prev + 1);
  };

  const guideSelectHandler = function (event) {
    event.stopPropagation();
    const guideId = event.target.id;

    setSelectedGuide((prev) => {
      if (prev.includes(guideId)) {
        return [...prev.filter((item) => item !== guideId)];
      } else {
        return [...prev, guideId];
      }
    });
  };

  const handleSearch = function (value) {
    setSearchQuery(value);
  };

  const saveGuideHandler = function () {
    setValue("guides", selectedGuide);
    handleMenu();
  };

  return (
    <>
      <div className=" flex flex-col gap-2 py-2 px-1">
        <div>
          <div className=" w-full flex justify-end">
            <div className="w-full">
              <Input
                type="text"
                label="Search guide"
                className="text-offGray"
                variant="outlined"
                onChange={(e) =>
                  setTimeout(() => {
                    handleSearch(e.target.value);
                  }, 500)
                }
                defaultValue={searchQuery}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
          </div>
        </div>
        {loading && (
          <div className=" flex justify-center">
            <Spinner />
          </div>
        )}
        {guide?.length < 1 && !loading && (
          <div className=" flex justify-center">
            <Typography variant="small" color="gray" className=" pt-0 pb-2">
              No guide found
            </Typography>
          </div>
        )}
        <div className="  max-h-[320px] flex flex-col gap-2 overflow-x-hidden ">
          {guide?.length > 0 &&
            !loading &&
            guide.map((item) => (
              <div
                id={item.id}
                onClick={guideSelectHandler}
                key={item.id}
                className=" flex items-center  gap-3 hover:opacity-75 duration-200 hover:cursor-pointer "
              >
                <Avatar
                  src={item?.profileImage}
                  alt="profile"
                  className="pointer-events-none"
                />
                <div className=" flex-grow pointer-events-none">
                  <Typography className="text-lg text-offGray font-medium tracking-wide">
                    {item?.fullName}
                  </Typography>
                  <Typography
                    variant="small"
                    className=" text-offGray  tracking-wide"
                  >
                    {`$${item?.price} per/person`}
                  </Typography>
                </div>
                <Checkbox
                  readOnly
                  id={item.id}
                  checked={selectedGuide.includes(item.id)}
                />
              </div>
            ))}
          <div>
            {pageInfo?.currentPage < pageInfo?.totalPage && !loading && (
              <div className="flex items-center justify-center">
                <Button
                  loading={loadingMore}
                  variant="outlined"
                  size="sm"
                  onClick={loadMoreHandler}
                  className=" font-normal py-1 px-4 mt-2"
                >
                  Load more
                </Button>
              </div>
            )}
            {pageInfo?.currentPage === pageInfo?.totalPage && !loading && (
              <Typography className=" text-center text-offGray pt-2">
                All caught up
              </Typography>
            )}
          </div>
        </div>

        <div className="  w-full text-center p-1 px-3">
          <Button
            disabled={selectedGuide.length < 1}
            onClick={saveGuideHandler}
            fullWidth
            className=" bg-actionBlue p-2 px-3 font-normal tracking-wide  "
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
