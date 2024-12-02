import { apiRequest } from "./apiClient";

export const getUserByUserName = async function (userName) {
  try {
    const res = await apiRequest("get", `/api/v1/user/username/${userName}`);
    return res?.data?.user;
  } catch (error) {
    throw error.response.data;
  }
};
