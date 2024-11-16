"use client";
import { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  const dateRef = useRef(null);

  return (
    <>
      {/* <DatePicker selected={startDate} placeholderText="Select A Day" /> */}
      <input
        type="date"
        ref={dateRef}
        defaultValue={"2002-03-05"}
        placeholder="hi"
        className="p-2 rounded-md border-2 my-2 border-shadeBlack"
      />
    </>
  );
}
