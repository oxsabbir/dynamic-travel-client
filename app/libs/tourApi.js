import { apiRequest } from "./apiClient";

export const deleteTour = async function (tourId) {
  try {
    const tourData = await apiRequest("delete", `/api/v1/tour/${tourId}`);
    return tourData?.data;
  } catch (error) {
    throw error;
  }
};
