import { getUserByUserName } from "@/app/libs/userApi";
import { auth } from "@/auth";
import Nav from "@/app/components/Header/Nav";
import Container from "@/app/components/Extras/Container";
import Image from "next/image";
import { Typography } from "@/app/ui/materialExport";
import ProfileTour from "./ProfileTour";

export default async function page({ params }) {
  const userName = params.userName;
  const session = await auth();
  const authUserData = await getUserByUserName(userName);

  return (
    <>
      <div className="profileGradient h-[230px]">
        <Nav />
      </div>
      <Container>
        <div>
          <div className="lg:-translate-y-[18%] -translate-y-[15%] ">
            <div className="w-full flex flex-col  pb-4 lg:flex-row lg:justify-start gap-2 items-center justify-center">
              <Image
                src={authUserData?.profileImage}
                alt="profileImage"
                width={265}
                height={265}
                quality={90}
                className="lg:w-[265px] lg:h-[265px] h-[240px] w-[240px] border-[10px] border-[#7575754c] rounded-[50px]"
              />
              <div className=" self-end p-2 lg:p-5 gap-4 flex flex-col lg:flex-row items-center justify-between w-full">
                <div className=" text-center lg:text-left">
                  <Typography
                    variant="lead"
                    className=" text-textBlack tracking-wider font-bold text-3xl mb-4"
                  >
                    {authUserData?.fullName}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="tracking-wide text-offGray  max-w-[300px]"
                  >
                    Web developer and Product designer based on San Antonio
                  </Typography>
                </div>
                <div className="flex gap-3 items-center lg:p-2 pb-0">
                  <div className=" p-2">
                    <Typography className=" text-offBlack font-medium tracking-wide text-base">
                      Completed
                    </Typography>
                    <Typography className=" font-extrabold text-4xl text-offBlack mt-2 tracking-wider">
                      56
                    </Typography>
                  </div>
                  <div className=" p-2">
                    <Typography className=" text-offBlack font-medium tracking-wide text-base">
                      Upcoming
                    </Typography>
                    <Typography className=" font-extrabold text-4xl text-offBlack mt-2 tracking-wider">
                      4
                    </Typography>
                  </div>
                  <div className=" p-2">
                    <Typography className=" text-offBlack font-medium tracking-wide text-base">
                      To Review
                    </Typography>
                    <Typography className=" font-extrabold text-4xl text-offBlack mt-2 tracking-wider">
                      14
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[300px] ">
              <ProfileTour />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
