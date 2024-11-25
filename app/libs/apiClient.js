import { auth } from "@/auth";
import axios from "axios";
import { getSession } from "next-auth/react";
import { getBackendURL } from "./getEnv";

const getToken = async function () {
  if (typeof window === "undefined") {
    const session = await auth();
    return session?.accessToken;
  } else {
    const session = await getSession();
    return session?.accessToken;
  }
};
// api client to make request with the jwt
export async function apiRequest(method, url, data = {}, headers = {}) {
  const token = await getToken();
  const baseURL = await getBackendURL();
  const apiClient = axios.create({
    baseURL,
  });

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
