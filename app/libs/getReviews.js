import { apiRequest } from "./apiClient";

export const getReviews = async function (tourId) {
  try {
    const tourData = await apiRequest("get", `/api/v1/tour/${tourId}/review`);
    return tourData?.data;
  } catch (error) {
    throw error;
  }
};
