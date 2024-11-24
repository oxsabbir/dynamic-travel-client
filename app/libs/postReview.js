import { apiRequest } from "./apiClient";

export default async function postReview(tourId, reviewData) {
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
}
