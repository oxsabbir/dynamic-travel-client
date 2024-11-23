"use server";
export const getStripeKey = async function () {
  return process.env.STRIPE_PUBLISHABLE_KEY;
};

export const getBackendURL = async function () {
  return process.env.SEVER_URL;
};
