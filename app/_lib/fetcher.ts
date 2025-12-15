/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

export const fetcher = async <T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  url: string,
  token?: string,
  data?: any,
) => {
  try {
    const response = await api({
      method,
      url,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data?.data as T;
  } catch (error: any) {
    throw error.response?.data?.message || error.message;
  }
};
