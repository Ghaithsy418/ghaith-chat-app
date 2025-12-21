import { cacheLife } from "next/cache";
import { getToken } from "../_helpers/getToken";
import { UpdateProfileType, UserType } from "../_types/userTypes";
import { fetcher } from "./fetcher";

export const getUserProfile = async (token: string) => {
  "use cache";
  cacheLife("max");

  const data = await fetcher<UserType>("GET", "user-profile", token);

  return data;
};

export const updateUserProfile = async (data: UpdateProfileType) => {
  const token = await getToken();
  const res = await fetcher("PATCH", "users", token, data);

  return res;
};
