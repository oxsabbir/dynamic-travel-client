import { apiRequest } from "./apiClient";

export const getAllTours = async function () {
  try {
    const tourData = await apiRequest("get", "/api/v1/tour");
    return tourData?.data;
  } catch (error) {
    throw error;
  }
};

export const createNewTour = async function (formData) {
  try {
    const tourData = await apiRequest("post", `/api/v1/tour`, formData);
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};

export const deleteTour = async function (tourId) {
  try {
    const tourData = await apiRequest("delete", `/api/v1/tour/${tourId}`);
    return tourData;
  } catch (error) {
    throw error;
  }
};

export const updateTour = async function (tourId, formData) {
  try {
    const tourData = await apiRequest(
      "patch",
      `/api/v1/tour/${tourId}`,
      formData
    );
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};
