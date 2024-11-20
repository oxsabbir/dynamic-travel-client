import { apiRequest } from "./apiClient";
import { loadStripe } from "@stripe/stripe-js";
import { getStripeKey } from "./getEnv";

export default async function bookTour(tourData, selectedGuide) {
  const stripe = await loadStripe(await getStripeKey());
  const product = [
    {
      name: tourData?.title,
      description: tourData?.summery,
      image: tourData?.coverImage,
      price: tourData?.price,
    },
    {
      name: selectedGuide?.fullName,
      image: tourData?.coverImage,
      price: selectedGuide?.price,
      description: "Guides Fee",
    },
  ];

  try {
    const bookingResponse = await apiRequest(
      "post",
      "/api/v1/tour/create-checkout-session",
      product
    );
    const session = bookingResponse.data?.session;
    const result = await stripe.redirectToCheckout({
      sessionId: session?.id,
    });
    if (result.error) throw result.error;
    return "success";
  } catch (error) {
    throw error;
  }
}
