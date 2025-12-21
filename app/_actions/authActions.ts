/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getToken } from "../_helpers/getToken";
import { fetcher } from "../_lib/fetcher";
import { UserType } from "../_types/userTypes";

interface SigninParams {
  email: string;
  password: string;
}

interface SignupParams {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
}

export const signIn = async (body: SigninParams) => {
  let isSuccess = false;
  try {
    const data = await fetcher<{ token: string; user: UserType }>(
      "POST",
      "/sign-in",
      "",
      body,
    );

    const cookieStore = await cookies();
    cookieStore.set("userToken", data?.token);

    isSuccess = true;
  } catch (err) {
    return { success: false, message: err };
  }
  if (isSuccess) redirect("/");
};

export const signUp = async (body: SignupParams) => {
  let isSuccess = false;
  try {
    const data = await fetcher<{ token: string; user: UserType }>(
      "POST",
      "/sign-up",
      "",
      body,
    );

    const cookieStore = await cookies();
    cookieStore.set("userToken", data.token);

    isSuccess = true;
  } catch (err) {
    return { success: false, message: err };
  }
  if (isSuccess) redirect("/");
};

export const logout = async () => {
  const token = await getToken();

  try {
    await fetcher("DELETE", "/logout", token);

    const cookieStore = await cookies();
    cookieStore.delete("userToken");

    return;
  } catch (err) {
    return { success: false, message: err };
  }
};
