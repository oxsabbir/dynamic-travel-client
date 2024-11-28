import { apiRequest } from "./apiClient";

export default async function getAllGuides(query) {
  try {
    const guideData = await apiRequest(
      "get",
      `/api/v1/guide${query ? `?query=${query}` : ""}`
    );
    return guideData?.data;
  } catch (error) {
    throw error;
  }
}
