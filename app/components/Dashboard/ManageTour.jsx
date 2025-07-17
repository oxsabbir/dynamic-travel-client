import TourMain from "../Map/TourMain";
import { Suspense } from "react";

export default function ManageTour() {
  return (
    <Suspense>
      <TourMain pageType={"admin"} />;
    </Suspense>
  );
}
