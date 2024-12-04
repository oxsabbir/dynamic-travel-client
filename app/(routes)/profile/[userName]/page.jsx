import { getUserByUserName } from "@/app/libs/userApi";
import { auth } from "@/auth";
import Nav from "@/app/components/Header/Nav";
import Container from "@/app/components/Extras/Container";
import { Typography, Avatar } from "@/app/ui/materialExport";
import ProfileTour from "./ProfileTour";
import profileGradient from "../../../../public/image/profileGradient.jpg";

export default async function page({ params }) {
  const userName = params.userName;
  const session = await auth();
  const userData = await getUserByUserName(userName);

  return (
    <>
      <div>
        <div className=" relative">
          <div
            style={{
              backgroundImage: `url("${profileGradient.src}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
            className=" h-[250px]"
          >
            <Nav />
          </div>
          <div className=" absolute top-[55%] left-[50%] -translate-x-[50%] w-full">
            <Container>
              <div className="w-full flex flex-col pb-4 lg:flex-row lg:justify-start gap-2 items-center justify-center">
                <Avatar
                  src={userData?.profileImage}
                  alt="profileImage"
                  width={250}
                  variant="rounded"
                  height={250}
                  className="lg:w-[265px] lg:h-[265px] h-[240px] w-[240px] object-cover  border-[8px] border-[#b6b6b64c] rounded-[45px]"
                />

                <div className=" self-end p-2 lg:p-5 gap-4 flex flex-col lg:flex-row items-center justify-between w-full">
                  <div className=" text-center lg:text-left">
                    <Typography
                      variant="lead"
                      className=" text-textBlack tracking-wider font-bold text-3xl mb-4"
                    >
                      {userData?.fullName}
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
                <ProfileTour userName={userName} />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
