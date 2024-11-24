"use client";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import { HiOutlinePencilAlt, HiOutlineStar, HiStar } from "react-icons/hi";
import postReview from "@/app/libs/postReview";

export function RatingForm({ tourId, refetch }) {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const reset = () => {
    setOpen(false);
    setRating(0);
    setReview("");
  };

  const handleRating = async function () {
    setLoading(true);
    try {
      const reviewData = await postReview(tourId, { rating: +rating, review });
      setLoading(false);
      refetch();
      reset();
      console.log(reviewData);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 shadow-md font-normal tracking-wide bg-actionBlue "
      >
        <HiOutlinePencilAlt className="w-5 h-5 " />
        Write a review
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] ">
          <CardBody className="flex flex-col gap-2">
            <Typography
              variant="h4"
              className=" uppercase text-center pb-3 font-thin"
            >
              Give us a rating
            </Typography>
            <div className=" bg-senseWhite rounded-md p-4 mb-2">
              <div>
                <Typography
                  variant="paragraph"
                  className=" text-textBlack tracking-wide text-lg p-3 text-center"
                >
                  Rate this out of 5 by your experience
                </Typography>
              </div>
              <div className=" flex items-center justify-center  gap-3.5 py-3 pt-1">
                {new Array(5).fill(1).map((item, i) => (
                  <IconButton
                    onClick={() => setRating(i + 1)}
                    variant="text"
                    key={i}
                    className=" rounded-full"
                  >
                    {i + 1 <= rating ? (
                      <HiStar
                        style={{ animationDelay: `${90 * i + 1}ms` }}
                        className={`w-12 h-12 p-1 text-orange-500 opacity-0 withFill`}
                        strokeWidth={1}
                      />
                    ) : (
                      <HiOutlineStar
                        style={{ animationDelay: `${90 * i + 1}ms` }}
                        className={`w-12 h-12 p-1 text-orange-500 opacity-0 noneFill`}
                        strokeWidth={1}
                      />
                    )}
                  </IconButton>
                ))}
              </div>
              <div className=" p-2 flex items-start justify-between ">
                <Typography variant="small" className="text-sm text-textBlack">
                  Bad
                </Typography>
                <Typography variant="small" className=" text-sm text-textBlack">
                  Excellent
                </Typography>
              </div>
            </div>
            <Textarea
              defaultValue={review}
              onChange={(event) => setReview(event.target.value)}
              className="!bg-senseWhite flex items-center justify-center font-medium shadow-none normal-case text-[15px] text-blue-gray-900 tracking-wide rounded-md"
              label="Write a review"
            />

            {error && (
              <Typography
                variant="small"
                className="text-red-400 text-center mt-2"
              >
                {error}
              </Typography>
            )}
          </CardBody>

          <CardFooter className="pt-0">
            <Button
              loading={loading}
              disabled={rating < 1 || review.length < 1}
              onClick={handleRating}
              fullWidth
              className="flex items-center justify-center gap-2 shadow-md font-normal text-sm tracking-wide bg-actionBlue"
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
