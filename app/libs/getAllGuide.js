import { apiRequest } from "./apiClient";

export default async function getAllGuides(query, page) {
  let queryBuild = "";
  if (query && page > 1) {
    queryBuild = `?query=${query}&page=${page}`;
  } else if (page > 1 && !query) {
    queryBuild = `?page=${page}`;
  } else if (query && page < 2) {
    queryBuild = `?query=${query}`;
  }
  try {
    const guideData = await apiRequest("get", `/api/v1/guide${queryBuild}`);
    return { ...guideData?.data, pagination: guideData.pagination };
  } catch (error) {
    throw error;
  }
}
