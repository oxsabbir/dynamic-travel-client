import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/app/components/Dashboard/Overview/Calender.css";

export default function CalenderMenu() {
  const bookedDates = ["2024-03-10", "2024-03-15", "2024-03-27", "2024-03-30"]; // Specify the dates where events are booked

  const tileContent = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    const isBooked = bookedDates.includes(dateString);

    return (
      <div>
        {isBooked && (
          <div
            className=" bg-pink-300"
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
        )}
      </div>
    );
  };
  return (
    <>
      <div className="">
        <Calendar showNavigation={false} tileContent={tileContent} />
      </div>
    </>
  );
}
