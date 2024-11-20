"use server";
import { apiRequest } from "./apiClient";
import { loadStripe } from "@stripe/stripe-js";
export default async function bookTour(tourData, selectedGuide) {
  const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  const product = [
    {
      name: tourData?.title,
      description: tourData?.description,
      image: tourData?.coverImage,
      price: tourData?.price,
    },
    {
      name: selectedGuide?.fullName,
      image: tourData?.coverImage,
      price: selectedGuide?.price,
    },
  ];

  try {
    const bookingResponse = await apiRequest(
      "post",
      "/tour/create-checkout-session",
      product
    );
    const session = bookingResponse.data;
    console.log(session);
    const result = await stripe.redirectToCheckout({
      sessionId: session?.id,
    });
    if (result.error) throw result.error;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
