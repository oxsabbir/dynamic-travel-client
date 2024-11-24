"use client";
import { Typography, Button, Avatar } from "@/app/ui/materialExport";
import { HiOutlinePencilAlt, HiOutlineTrash, HiStar } from "react-icons/hi";
import { RatingForm } from "./RatingForm";
import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "@/app/libs/reviewsApi";

export default function Review({
  totalRating,
  ratingsAverage,
  tourId,
  authImage,
}) {
  const [reviews, setReviews] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedReview, setSelectedReview] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const refetch = () => setUpdated((prev) => !prev);

  const openCreateHandler = () => {
    setActionType("create");
    setOpen((prev) => !prev);
  };

  const openEditHandler = (e) => {
    setActionType("edit");
    const reviewId = e.target.id;
    const foundData = reviews.find((item) => item.id === reviewId);
    setSelectedReview({
      review: foundData.review,
      rating: foundData.rating,
      id: foundData.id,
    });
    setOpen((prev) => !prev);
  };

  const deleteReviewHandler = async function (events) {
    const reviewId = events.target.id;
    setLoading(true);
    try {
      const deletedTour = await deleteReview(reviewId);
      refetch();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const reviewData = await getReviews(tourId);
      setReviews(reviewData?.review);
    };
    getData();
  }, [updated]);

  return (
    <>
      <RatingForm
        open={open}
        preData={
          actionType === "edit" ? selectedReview : { review: "", rating: 0 }
        }
        reviewId={selectedReview.id}
        handleOpen={openCreateHandler}
        actionType={actionType}
        tourId={tourId}
        refetch={refetch}
      />
      <div className="bg-gray-100 p-8 px-4 md:p-12 my-12 rounded-lg text-3xl flex flex-col text-center md:text-left gap-2 md:flex-row  items-center justify-between">
        <div>
          <Typography
            variant="h3"
            className="tracking-wide text-textBlack mb-2"
          >
            Review about this tour
          </Typography>
          <Typography variant="p" className="tracking-wide text-shadeBlack">
            We will be glad to know what you think about the tour
          </Typography>
        </div>
        <div>
          <Button
            onClick={openCreateHandler}
            className="flex items-center gap-2 shadow-md font-normal tracking-wide bg-actionBlue "
          >
            <HiOutlinePencilAlt className="w-5 h-5 " />
            Write a review
          </Button>
        </div>
      </div>

      {/* main review */}
      <div className="flex flex-col px-8 md:px-2 md:flex-row border-b py-5 border-[#1e1e1e61] justify-between gap-4 items-center md:items-end">
        <div className="text-center flex flex-col gap-1 items-center">
          <Typography variant="small" className="text-shadeBlack">
            Overall Ratings
          </Typography>
          <Typography
            variant="h2"
            className="font-bold tracking-wide text-textBlack"
          >
            {ratingsAverage} / 5
          </Typography>
          <div>
            <div className="rating flex gap-0.5">
              {new Array(5).fill(1).map((item, i) => (
                <HiStar key={i} className="text-yellow-900 w-8 h-8" />
              ))}
            </div>
          </div>
          <Typography variant="small" className="text-shadeBlack">
            Based on {totalRating} reviews
          </Typography>
        </div>
        <div className=" flex items-center gap-2">
          <Button className=" tracking-wide bg-actionBlue ">All</Button>
          <Button className>Latest</Button>
          <Button>Positive</Button>
        </div>
      </div>

      {/* review items */}

      {reviews &&
        reviews?.map((item) => (
          <div className=" border-b border-[#99999981] py-4 flex flex-col gap-3 ">
            <div className="rating flex gap-0.5 items-center">
              {new Array(Math.round(item.rating)).fill(1).map((item, i) => (
                <HiStar key={i} className="text-yellow-900 w-6 h-6" />
              ))}
              <Typography
                variant="small"
                className=" text-shadeBlack ml-2"
              >{`(${item?.rating})`}</Typography>

              {item?.user?.profileImage === authImage && (
                <div className=" flex  ml-2 items-center ">
                  <Button
                    id={item?.id}
                    onClick={openEditHandler}
                    variant="text"
                    size="sm"
                    className="px-2"
                  >
                    <HiOutlinePencilAlt className="w-5 h-5 pointer-events-none " />
                  </Button>
                  <Button
                    id={item?.id}
                    loading={loading}
                    onClick={deleteReviewHandler}
                    variant="text"
                    size="sm"
                    className="px-2"
                  >
                    <HiOutlineTrash className="w-5 h-5 pointer-events-none" />
                  </Button>
                </div>
              )}
            </div>
            <div className="">
              <Typography
                variant="p"
                className="text-shadeBlack tracking-wide w-full md:w-[65%]"
              >
                {item?.review}
              </Typography>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Avatar
                  src={item?.user?.profileImage}
                  alt="avatar"
                  variant="rounded"
                  className="w-14 h-14"
                />
                <div>
                  <Typography variant="h6">{item?.user?.fullName}</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Web Developer
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* help center */}
      <div className="bg-blue-400 p-8  px-4 md:p-12 my-20 rounded-lg text-3xl flex flex-col text-center md:text-left gap-2 md:flex-row  items-center justify-between">
        <div>
          <Typography variant="h3" className="tracking-wide text-white mb-2">
            What are you wating for ?
          </Typography>
          <Typography variant="p" className="tracking-wide text-offWhite">
            You've got you covered with our simple booking method <br /> Book
            the tour right now to experience the most amazing tour
          </Typography>
        </div>

        <div>
          <Button className="flex items-center gap-2 shadow-md font-bold uppercase tracking-wide bg-white text-black ">
            Book now
          </Button>
        </div>
      </div>
    </>
  );
}
