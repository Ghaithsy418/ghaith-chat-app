import { getToken } from "../_helpers/getToken";
import { getUserProfile } from "../_lib/userApi";
import WrapperComponent from "./ui/WrapperComponent";

export const revalidate = Infinity;

async function UserProfileContent() {
  const token = await getToken();
  const currUserData = await getUserProfile(token || "");

  if (!currUserData) return null;
  return (
    <WrapperComponent
      user={currUserData}
      className="bg-main flex h-[99vh] w-screen border-0 sm:h-[90vh] sm:w-[90vw] sm:rounded-lg sm:border-2 sm:border-indigo-300/20"
    />
  );
}

export default UserProfileContent;
