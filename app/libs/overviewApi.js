import { apiRequest } from "./apiClient";

export const getSellsStats = async function (filterType) {
  try {
    const res = await apiRequest(
      "get",
      `/api/v1/statistic/sales${filterType ? `?filter=${filterType}` : ""}`
    );
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};
