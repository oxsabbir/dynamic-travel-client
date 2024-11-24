import { apiRequest } from "./apiClient";

export const getReviews = async function (tourId) {
  try {
    const tourData = await apiRequest("get", `/api/v1/tour/${tourId}/review`);
    return tourData?.data;
  } catch (error) {
    throw error;
  }
};

export const postReview = async function (tourId, reviewData) {
  try {
    const tourData = await apiRequest(
      "post",
      `/api/v1/tour/${tourId}/review`,
      reviewData
    );
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};

export const updateReview = async function (tourId, reviewId, reviewData) {
  try {
    const tourData = await apiRequest(
      "patch",
      `/api/v1/tour/${tourId}/review/${reviewId}`,
      reviewData
    );
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};

export const deleteReview = async function (tourId, reviewData) {
  try {
    const tourData = await apiRequest(
      "patch",
      `/api/v1/tour/${tourId}/review`,
      reviewData
    );
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};
