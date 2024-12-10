import { apiRequest } from "./apiClient";

export const applyForGuide = async function (price) {
  try {
    const guideData = await apiRequest("post", `/api/v1/guide/becomeGuide`, {
      price: price,
    });
    return guideData?.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const acceptGuide = async function (guideId) {
  try {
    const guideData = await apiRequest(
      "get",
      `/api/v1/guide/accept/${guideId}`
    );
    return guideData?.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const rejectGuide = async function (guideId) {
  console.log("hi", guideId);
  try {
    const guideData = await apiRequest(
      "get",
      `/api/v1/guide/reject/${guideId}`
    );
    return guideData?.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const deleteGuide = async function (guideId) {
  try {
    const guideData = await apiRequest("delete", `/api/v1/guide//${guideId}`);
    return guideData?.data;
  } catch (error) {
    throw error.response?.data;
  }
};
