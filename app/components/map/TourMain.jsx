"use client";
import Nav from "@/app/components/Header/Nav";
import Filter from "@/app/components/Tour/Filter";
import Search from "@/app/components/Tour/Search";
import TourList from "@/app/components/Tour/TourList";
import Container from "@/app/components/Extras/Container";
import { getFilteredData } from "@/app/libs/getFilteredTour";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineAdjustments, HiOutlineChevronUp } from "react-icons/hi";
import {
  Button,
  Select,
  Option,
  Chip,
  Card,
  Typography,
} from "@material-tailwind/react";
import { filterSort } from "@/app/constant/constant";
import FilterTour from "@/app/util/FilterTour";
import filterManager from "@/app/util/FilterManager";
import Loading from "@/app/ui/Loading";
import NotFound from "../Tour/NotFound";
import Link from "next/link";
import { Spinner } from "@material-tailwind/react";
import useInfiniteLoading from "@/app/hooks/useInfiniteLoading";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function TourMain({ pageType }) {
  const [tourData, setTourData] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({});
  const [fetchAgain, setFetchAgain] = useState(false);

  const [showFilter, setShowFilter] = useState(true);
  const [animate, setAnimte] = useState(true);

  const refetch = () => {
    setFetchAgain((prev) => !prev);
  };

  const toggleFilter = () => {
    if (animate) {
      setAnimte(false);
    } else {
      setAnimte(true);
    }
    setShowFilter((prev) => (!prev ? !prev : prev));
  };

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const filterTour = new FilterTour(searchParams);
  filterTour.init();

  const query = filterTour.getServerQuery();
  const filteredEntry = filterTour.getFilteredEntry();
  const activeFilter = filterTour.getActiveFilter();

  const [ref, page] = useInfiniteLoading(
    {
      options: {
        root: null,
        rootMargin: "100px",
        threshold: 0,
      },
    },
    query,
    fetchAgain
  );

  useEffect(() => {
    const getData = async () => {
      setMoreLoading(true);
      if (page <= 1) {
        setLoading(true);
      }
      const data = query
        ? await getFilteredData(page, query)
        : await getFilteredData(page);

      if (data?.data) {
        setMoreLoading(false);
        if (page > 1) {
          setTourData((prev) => {
            return {
              total: prev.total + data.data.total,
              tour: [...prev.tour, ...data.data.tour],
            };
          });
          setPageInfo(data?.pagination);
        } else {
          setTourData(data.data);
          setPageInfo(data?.pagination);
        }
        setLoading(false);
      }
    };
    getData();
  }, [query, page, fetchAgain]);

  const activeFilterHandler = function (filteredBy) {
    if (!activeFilter) return;
    const params = new URLSearchParams(searchParams);
    params.delete(activeFilter[filteredBy]);
    replace(`${pathName}?${params?.toString()}`);
    setSelectedSort(null);
  };

  const sortHandler = function (selectedValue) {
    const modifiedParams = filterManager(searchParams, "Sort", selectedValue);
    replace(`${pathName}?${modifiedParams?.toString()}`);
    setSelectedSort(selectedValue);
  };

  return (
    <>
      <div>
        {pageType !== "admin" && <Nav />}
        <Container>
          <div id="main" className=" flex flex-col">
            <div className=" flex justify-between items-center">
              <div className=" hidden  md:flex gap-3 ">
                <Button
                  onClick={toggleFilter}
                  className=" flex items-center gap-1 bg-gray-900 "
                  size="sm"
                >
                  <HiOutlineChevronUp
                    className={`w-5 h-5 ${
                      !showFilter ? "rotate-0" : "rotate-180"
                    }`}
                  />
                  <HiOutlineAdjustments className=" w-5 h-5 " />
                </Button>

                <div className="  md:flex">
                  <div className="flex flex-col gap-6">
                    <Select
                      value={selectedSort}
                      onChange={(value) => sortHandler(value)}
                      color="gray"
                      label="Sort By"
                      variant="outlined"
                    >
                      {filterSort?.map((item) => (
                        <Option key={item.id} value={item.value}>
                          {item.title}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <Search />
              </div>
              {pageType === "admin" && (
                <div className="">
                  <Link href={`${pathName}/create-tour`}>
                    <Button className="flex items-center gap-2 shadow-md font-normal py-2.5 px-3 ml-2 tracking-wide bg-actionBlue">
                      <HiOutlinePencilAlt className="w-5 h-5 " />
                      New Tour
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            <div className=" flex justify-between gap-3">
              {showFilter && (
                <div
                  onAnimationEnd={() => (animate ? "" : setShowFilter(false))}
                  className={`lg:flex hidden ${
                    animate ? "showfilter" : "hidefilter"
                  } w-[340px] sticky px-2 top-0 overflow-auto h-screen `}
                >
                  <Filter filteredEntry={filteredEntry} />
                </div>
              )}

              <div className="w-full">
                <div className=" hidden md:flex px-2.5  gap-4 items-center">
                  {Object.keys(activeFilter)?.map((item) => (
                    <Chip
                      value={`Filter : ${item}`}
                      key={item}
                      color="gray"
                      open={open}
                      className=" normal-case font-medium text-sm tracking-normal "
                      onClose={() => activeFilterHandler(item)}
                      variant="ghost"
                    />
                  ))}
                </div>

                {tourData?.total > 0 && !loading && (
                  <>
                    <TourList
                      pageType={pageType}
                      activeFilter={showFilter}
                      tourData={tourData}
                      refetch={refetch}
                    />
                    {page < pageInfo?.totalPage && !moreLoading && (
                      <div className="w-full flex items-start justify-center  p-6 ">
                        <Spinner ref={ref} className="h-10 w-10" />
                      </div>
                    )}

                    {moreLoading && (
                      <div className="w-full flex items-start justify-center  p-6 ">
                        <Spinner className="h-10 w-10" />
                      </div>
                    )}

                    {!moreLoading && page === pageInfo?.totalPage && (
                      <div className="w-full flex items-start justify-center  p-6 ">
                        <Typography className="text-shadeBlack  text-md tracking-wide ">
                          All Caught Up
                        </Typography>
                      </div>
                    )}
                  </>
                )}
                {tourData?.total < 1 && !loading && <NotFound />}
                {loading && (
                  <Card className="h-[400px]">
                    <Loading />
                  </Card>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
