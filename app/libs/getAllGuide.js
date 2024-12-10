import { apiRequest } from "./apiClient";

export default async function getAllGuides(query, sort, page = 1, isPending) {
  let queryBuild = "";

  if (query && page > 1) {
    queryBuild = `?query=${query}&page=${page}`;
  } else if (page > 1 && !query) {
    queryBuild = `?page=${page}`;
  } else if (query && page < 2) {
    queryBuild = `?query=${query}`;
  }

  try {
    const guideData = await apiRequest(
      "get",
      `/api/v1/guide${isPending ? "/pending" : ""}${queryBuild}${
        sort ? (queryBuild.length > 0 ? `&sort=${sort}` : `?sort=${sort}`) : ""
      }`
    );
    return { ...guideData?.data, pagination: guideData.pagination };
  } catch (error) {
    throw error;
  }
}
