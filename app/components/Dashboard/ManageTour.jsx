import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@/app/components/Map/TourMain"), {
  ssr: false,
});

export default function ManageTour() {
  return (
    <>
      <TourMain pageType={"admin"} />
    </>
  );
}
