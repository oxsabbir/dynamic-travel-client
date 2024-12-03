import { apiRequest } from "./apiClient";
import { loadStripe } from "@stripe/stripe-js";
import { getStripeKey } from "./getEnv";

export default async function bookTour(tourId, guideId, date) {
  const stripe = await loadStripe(await getStripeKey());

  try {
    const bookingResponse = await apiRequest(
      "get",
      `/api/v1/booking/create-checkout-session/${tourId}/${guideId}/${date}`
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
