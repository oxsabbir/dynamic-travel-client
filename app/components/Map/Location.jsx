import { Typography } from "@/app/ui/materialExport";
import TourMap from "./TourMap";

export default function Location({ places }) {
  console.log(places);
  return (
    <>
      <div className="py-6">
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
