import { apiRequest } from "./apiClient";

export default async function getAllGuides() {
  try {
    // const tourData = await axios.get(`http://localhost:4000/api/v1/tour`);
    const guideData = await apiRequest("get", "/api/v1/guide");
    return guideData?.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
