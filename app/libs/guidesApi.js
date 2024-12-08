import { apiRequest } from "./apiClient";

export const applyForGuide = async function (price) {
  try {
    const guideData = await apiRequest("post", `/api/v1/guide/becomeGuide`, {
      price: price,
    });
    return guideData?.data;
  } catch (error) {
    throw error.response?.data;
  }
};
