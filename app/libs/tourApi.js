import { apiRequest } from "./apiClient";

export const deleteTour = async function (tourId) {
  try {
    const tourData = await apiRequest("delete", `/api/v1/tour/${tourId}`);
    return tourData;
  } catch (error) {
    throw error;
  }
};
