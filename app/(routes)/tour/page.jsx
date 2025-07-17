import TourMain from "@/app/components/Map/TourMain";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <TourMain />
    </Suspense>
  );
}
