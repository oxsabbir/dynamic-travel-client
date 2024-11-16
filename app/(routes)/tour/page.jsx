import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@/app/components/Map/TourMain"));
export default function page() {
  return (
    <>
      <TourMain />
    </>
  );
}
