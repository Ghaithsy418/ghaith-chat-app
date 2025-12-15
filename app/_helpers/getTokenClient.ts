import Cookies from "js-cookie";

export function getTokenClient() {
  const token = Cookies.get("userToken");

  return token;
}
