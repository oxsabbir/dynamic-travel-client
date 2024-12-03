import { Typography } from "@/app/ui/materialExport";
import Link from "next/link";

export default function page() {
  return (
    <>
      <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
      ></script>
      <div className=" paymentGradient w-full h-screen flex items-center justify-center ">
        <div className=" bg-[#ffffffce] p-4 w-[90%] sm:w-[80%] md:min-w-[540px] lg:w-[50%] rounded-xl">
          <div className=" flex w-full items-center  justify-center">
            <dotlottie-player
              src="https://lottie.host/33ef1cd1-80f2-400e-9318-c1f19efc732e/xXJiKht5Gv.lottie"
              background="transparent"
              speed="1"
              style={{ width: "320px", height: "320px" }}
              autoplay
            ></dotlottie-player>
          </div>
          <div className="showfilter flex gap-2 flex-col items-center justify-center text-center mb-4">
            <Typography className=" text-offBlack font-bold text-2xl tracking-wide">
              Payment Failed
            </Typography>
            <Typography className=" tracking-wide text-offGray text-base font-medium">
              We didn't received your payment. <br />
              Something must went wrong
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
  );
}
