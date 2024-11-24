import axios from "axios";
import { apiRequest } from "./apiClient";

export const getFilteredData = async function (pageNo, query) {
  let pageString = "";
  if (pageNo > 0) {
    pageString = `?page=${pageNo}`;
  }
  console.log(pageNo);
  try {
    const tourData = await apiRequest(
      "get",
      `http://localhost:4000/api/v1/tour${
        query ? `?${query}` : ""
      }${pageString}`
    );
    return tourData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
