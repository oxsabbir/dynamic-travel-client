import { apiRequest } from "./apiClient";
export default async function updateTour(tourId, formData) {
  console.log(tourId);
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
}
