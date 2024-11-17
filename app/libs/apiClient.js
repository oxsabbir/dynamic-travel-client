import { auth } from "@/auth";
import axios from "axios";
import { getSession } from "next-auth/react";

// creating apiClient
const baseURL =
  process.env.ENVIRONMENT === "prod"
    ? process.env.RAILWAY_BACKEND_URL
    : `
http://localhost:4000`;

console.log("Host :", baseURL);

const apiClient = axios.create({
  baseURL,
});

const getToken = async function () {
  if (typeof window === "undefined") {
    const session = await auth();
    return session?.accessToken;
  } else {
    const session = await getSession();
    return session?.accessToken;
  }
};

export async function apiRequest(method, url, data = {}, headers = {}) {
  const token = await getToken();
  console.log(baseURL);
  try {
    const response = await apiClient.request({
      method,
      url,
      data,
      headers: token ? { Authorization: `Bearer ${token}` } : headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
