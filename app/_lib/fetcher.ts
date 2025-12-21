"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { redirect } from "next/navigation";

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
    const { status, statusText } = error.response;

    if (status === 401 || statusText === "Unauthorized") {
      redirect("/login");
    }
    throw error.response?.data?.message || error.message;
  }
};
