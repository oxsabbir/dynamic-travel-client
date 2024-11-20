"use server";
import { apiRequest } from "./apiClient";

export default async function bookTour(bookingDetails) {
  console.log(bookingDetails);
  try {
    const bookingResponse = await apiRequest(
      "post",
      "/tour/create-booking-session",
      bookingDetails
    );
    return bookingResponse?.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
