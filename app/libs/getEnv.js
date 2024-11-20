"use server";
export const getStripeKey = async function () {
  return process.env.STRIPE_PUBLISHABLE_KEY;
};
