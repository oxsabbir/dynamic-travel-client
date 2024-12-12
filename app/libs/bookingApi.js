import { apiRequest } from "./apiClient";
import { loadStripe } from "@stripe/stripe-js";
import { getStripeKey } from "./getEnv";

export const getPaymentSession = async function (sessionId) {
  try {
    const res = await apiRequest(
      "get",
      `/api/v1/booking/retrive-session/${sessionId}`
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const bookTour = async function (tourId, guideId, date) {
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
    throw error.response.data;
  }
};

export const getUserBooking = async function (userName, filterType) {
  try {
    const res = await apiRequest(
      "get",
      `/api/v1/booking/booking-by-user/${userName}/${filterType}`
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllBooking = async function (query, sort, page) {
  let customQuery = "";
  let queryobject = { query, sort, page };
  Object.keys(queryobject).forEach((item, i) => {
    if (queryobject[item] && i === 0) {
      customQuery = `?${item}=${queryobject[item]}`;
    } else if (queryobject[item] && i > 0 && customQuery) {
      customQuery = `${customQuery}&${item}=${queryobject[item]}`;
    } else if (queryobject[item] && i > 0 && !customQuery) {
      customQuery = `?${item}=${queryobject[item]}`;
    }
  });

  try {
    const res = await apiRequest("get", `/api/v1/booking${customQuery}`);
    return res;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserBookingCount = async function (userName) {
  try {
    const res = await apiRequest(
      "get",
      `/api/v1/booking/booking-by-user/${userName}`
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
