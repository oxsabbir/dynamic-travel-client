import { apiRequest } from "./apiClient";

export const getReviews = async function (tourId, page, sortValue) {
  let sortQuery = "";
  if (sortValue === "latest") {
    sortQuery = `sort=-updatedAt,-createdAt`;
  } else if (sortQuery === "positive") {
    sortValue = `sort=-rating`;
  }

  try {
    const review = await apiRequest(
      "get",
      `/api/v1/tour/${tourId}/review${sortQuery ? `?${sortQuery}` : ""}`
    );
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
