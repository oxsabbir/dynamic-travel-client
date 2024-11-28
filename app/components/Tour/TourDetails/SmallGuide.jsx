"use client";
import { Typography, Avatar } from "@/app/ui/materialExport";

export default function SmallGuide({ guides }) {
  const first4Only = guides?.slice(0, 3);
  return (
    <>
      <div className="flex items-center gap-2  py-2 ">
        <div className="flex items-center -space-x-3">
          {first4Only?.map((item, i) => (
            <Avatar
              key={i}
              variant="circular"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src={item.profileImage}
            />
          ))}
        </div>
        <Typography
          variant="paragraph"
          className="text-shadeBlack text-base font-medium tracking-wide "
        >
          {guides?.length > 4
            ? `${guides.length - 4} More guides available`
            : "No more guides available"}
        </Typography>
      </div>
    </>
  );
}
