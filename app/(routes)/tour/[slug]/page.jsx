import { getTour } from "@/app/libs/getTour";
import Nav from "@/app/components/Header/Nav";
import Footer from "@/app/components/LandingPages/Footer";
import { Button, Typography } from "@/app/ui/materialExport";
import Container from "@/app/components/Extras/Container";
import { HiOutlineHeart, HiOutlineShare, HiStar } from "react-icons/hi";
import Link from "next/link";
import Review from "../../../components/Tour/TourDetails/Reviews";
import SubDetails from "../../../components/Tour/TourDetails/SubDetails";
import SmallGuide from "../../../components/Tour/TourDetails/SmallGuide";
import FaqSection from "../../../components/Tour/TourDetails/FaqSection";

import BookingMenu from "../../../components/Tour/TourDetails/BookingMenu";
import Location from "@/app/components/Map/Location";
import FeatureImage from "@/app/components/Tour/TourDetails/FeatureImage";

export default async function SingleTour({ params }) {
  const tourData = await getTour(params.slug);
  let tour = tourData?.tour;
  return (
    <>
      <Nav />
      <main>
        <Container>
          {/* Feature image */}
          <FeatureImage coverImage={tour?.coverImage} images={tour?.images} />
          {/* Details */}
          <div className=" py-3 flex flex-col lg:flex-row  justify-between">
            <div>
              <Typography className="text-textBlack tracking-wide font-medium lg:text-3xl text-2xl">
                {tour?.title}
              </Typography>
              <Typography
                className="text-shadeBlack tracking-wide py-2"
                variant="paragraph"
              >
                {tour?.summery}
              </Typography>
            </div>

            <div className="gap-3 hidden lg:flex h-[40px]">
              <Button
                variant="outlined"
                className="rounded-md px-4 flex items-center gap-2"
              >
                <HiOutlineHeart />
                Save
              </Button>
              <Button
                variant="outlined"
                className="rounded-md px-4  flex items-center gap-2"
              >
                <HiOutlineShare />
                Share
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rating flex gap-0.5">
              {new Array(5).fill(1).map((item) => (
                <HiStar className="text-yellow-900 w-6 h-6" />
              ))}
            </div>
            <div className="flex gap-3">
              <Typography className="text-shadeBlack tracking-wide ">
                {tour?.ratingsAverage}/5
              </Typography>

              <Typography className="text-shadeBlack tracking-wide ">
                {`(${tour?.totalRating})`}
              </Typography>
              <Link href="#reviews">
                <Typography
                  variant="small"
                  className="text-blue-500 tracking-wide "
                >
                  reviews
                </Typography>
              </Link>
            </div>
          </div>

          <div className="lg:relative">
            <SubDetails tour={tour} />
            <BookingMenu />
          </div>

          <SmallGuide guides={tour?.guides} />
          <FaqSection tour={tour} />
          <Location places={tour?.locations} />
          {/* reviews */}
          <Review
            totalRating={tour?.totalRating}
            ratingsAverage={tour?.ratingsAverage}
            reviews={tour?.reviews}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
