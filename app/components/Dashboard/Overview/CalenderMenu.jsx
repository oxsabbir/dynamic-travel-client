import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/app/components/Dashboard/Overview/Calender.css";

export default function CalenderMenu() {
  return (
    <>
      <div className="">
        <Calendar showNavigation={false} />
      </div>
    </>
  );
}
