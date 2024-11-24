import { apiRequest } from "./apiClient";

export const getAllTours = async function () {
  try {
    const tourData = await apiRequest("get", "/api/v1/tour");
    return tourData?.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
