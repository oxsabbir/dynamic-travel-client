import { apiRequest } from "./apiClient";

export const getSellStats = async function (filterType) {
  try {
    const res = await apiRequest(
      "get",
      `/api/v1/statistic/sales${filterType ? "?filter=month" : ""}`
    );
    return res?.data?.user;
  } catch (error) {
    throw error.response.data;
  }
};
