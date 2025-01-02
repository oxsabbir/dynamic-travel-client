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

export const getSalesOverView = async function () {
  try {
    const res = await apiRequest("get", `/api/v1/statistic/salesOverview`);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserJoinStats = async function () {
  try {
    const res = await apiRequest("get", `/api/v1/statistic/userJoinStats`);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getUserBookedRatio = async function () {
  try {
    const res = await apiRequest("get", `/api/v1/statistic/userActionRatio`);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};
