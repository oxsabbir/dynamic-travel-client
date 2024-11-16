import {
  Card,
  Typography,
  Button,
  Select,
  Option,
} from "@/app/ui/materialExport";
import SelectDate from "@/app/components/Extras/SelectDate";

export default function BookingMenu({ guide }) {
  return (
    <>
      <Card className="rounded-md  lg:absolute  p-8 w-full lg:w-[400px] bg-offWhite top-0 right-0">
        <div className=" ">
          <Typography className="tracking-wide text-center py-2 font-medium text-lg uppercase text-textBlack">
            Find a guide by your date
          </Typography>

          <div className="flex flex-col">
            <SelectDate />
          </div>
          <div className="my-4">
            <Select label="Select Your Guide" className="py-2">
              <Option>Material Tailwind HTML</Option>
            </Select>
          </div>

          <Button
            className="uppercase font-normal text-sm tracking-wide bg-actionBlue"
            fullWidth
          >
            Book a guide
          </Button>
        </div>
      </Card>
    </>
  );
}
