import { auth } from "@/auth";
import axios from "axios";
import { getSession } from "next-auth/react";

// creating apiClient
console.log("Host : ", process.env.RENDER_BACKEND_URL);

const apiClient = axios.create({
  baseURL: process.env.RENDER_BACKEND_URL,
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
