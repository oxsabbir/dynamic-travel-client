import { Typography } from "@/app/ui/materialExport";
import dynamic from "next/dynamic";
const TourMap = dynamic(() => import("./TourMap"), { ssr: false });

export default function Location({ places }) {
  return (
    <>
      <div className="py-4">
        <Typography variant="h3" className="tracking-wide">
          Places were gonna explore
        </Typography>
      </div>
      <div>
        <TourMap locations={places} />
      </div>
    </>
  );
}
