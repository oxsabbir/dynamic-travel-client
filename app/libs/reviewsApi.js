import { apiRequest } from "./apiClient";

export const getReviews = async function (tourId) {
  try {
    const review = await apiRequest("get", `/api/v1/tour/${tourId}/review`);
    return review?.data;
  } catch (error) {
    throw error;
  }
};

export const postReview = async function (tourId, reviewData) {
  try {
    const review = await apiRequest(
      "post",
      `/api/v1/tour/${tourId}/review`,
      reviewData
    );
    return review?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};

export const updateReview = async function (tourId, reviewId, reviewData) {
  try {
    const review = await apiRequest(
      "patch",
      `/api/v1/tour/${tourId}/review/${reviewId}`,
      reviewData
    );
    return review?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};

export const deleteReview = async function (reviewId) {
  try {
    const reviewData = await apiRequest("delete", `/api/v1/review/${reviewId}`);
    return reviewData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};
