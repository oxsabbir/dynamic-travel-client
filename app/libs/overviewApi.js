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

export const getLoyaleGuide = async function () {
  try {
    const res = await apiRequest("get", `/api/v1/statistic/loyaleGuides`);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};
