import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@/app/components/Map/TourMain"), {
  ssr: true,
});
export default function page() {
  return (
    <>
      <TourMain />
    </>
  );
}
