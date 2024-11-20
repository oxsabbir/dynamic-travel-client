"use server";
import { apiRequest } from "./apiClient";

export default async function bookTour(bookingDetails) {
  console.log(bookingDetails);
  try {
    // const tourData = await axios.get(`http://localhost:4000/api/v1/tour`);
    const bookingResponse = await apiRequest(
      "post",
      "/tour/create-booking-session",
      bookingDetails
    );
    return bookingDetails?.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
