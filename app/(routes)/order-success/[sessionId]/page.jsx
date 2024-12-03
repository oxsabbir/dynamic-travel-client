import { getPaymentSession } from "@/app/libs/bookingApi";
import { Typography } from "@/app/ui/materialExport";
import Link from "next/link";

export default async function page({ params }) {
  const sessionId = params.sessionId;
  const session = await getPaymentSession(sessionId);
  return (
    <>
      {session.paymentInfo.paymentStatus === "paid" && (
        <>
          <script
            src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            type="module"
          ></script>
          <div className=" paymentGradient w-full h-screen flex items-center justify-center ">
            <div className=" bg-[#ffffffce] p-4 w-[90%] sm:w-[80%] md:min-w-[540px] lg:w-[50%] rounded-xl">
              <div className=" flex w-full items-center  justify-center">
                <dotlottie-player
                  src="https://lottie.host/2d1a1186-b4b6-46c5-ac78-f52e88a5c40f/3JJ6eLaCUe.lottie"
                  background="transparent"
                  speed="1"
                  style={{ width: "320px", height: "320px" }}
                  autoplay
                ></dotlottie-player>
              </div>
              <div className="showfilter flex gap-2 flex-col items-center justify-center text-center mb-4">
                <Typography className=" text-offBlack font-bold text-2xl tracking-wide">
                  Thanks for your payment
                </Typography>
                <Typography className=" tracking-wide text-offGray text-base font-medium">
                  We received your payment. <br />
                  You will get the reciepts via e-mail
                </Typography>
                <div>
                  <Link
                    className=" p-3 underline text-lg  text-actionBlue tracking-wide"
                    href={"/"}
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
