import axios from "axios";
import { apiRequest } from "./apiClient";

export const getFilteredData = async function (pageNo, query) {
  let pageString = "";
  if (pageNo > 0) {
    pageString = query ? `&page=${pageNo}` : `?page=${pageNo}`;
  }

  console.log(query, pageString);

  try {
    const tourData = await apiRequest(
      "get",
      `/api/v1/tour${query ? `?${query}` : ""}${pageString}`
    );
    console.log(tourData);
    return tourData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
