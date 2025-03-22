import { cookies } from "next/headers";

export async function getCurrUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie?.value) return null;
  const user = JSON.parse(userCookie?.value);
  return user;
}
