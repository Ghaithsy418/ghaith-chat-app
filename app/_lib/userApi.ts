import { getToken } from "../_helpers/getToken";
import { UserType } from "../_types/userTypes";
import { fetcher } from "./fetcher";

export const getUserProfile = async () => {
  const token = await getToken();
  const data = await fetcher<UserType>("GET", "user-profile", token);
  
  return data;
};
