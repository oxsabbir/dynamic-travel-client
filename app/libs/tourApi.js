import { apiRequest } from "./apiClient";

export const deleteTour = async function (tourId) {
  try {
    const tourData = await apiRequest("delete", `/api/v1/tour/${tourId}`);
    return tourData;
  } catch (error) {
    throw error;
  }
};

export const getTourBySelection = async function (type) {
  try {
    const tourData = await apiRequest("get", `/api/v1/tour/bytype/${type}`);
    return tourData.data;
  } catch (error) {
    throw error.response?.data;
  }
};
