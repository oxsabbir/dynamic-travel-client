import { apiRequest } from "./apiClient";

export default async function createNewTour(formData) {
  try {
    const tourData = await apiRequest("post", `/api/v1/tour`, formData);
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
}
