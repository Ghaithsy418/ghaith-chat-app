import { useChatting } from "@/app/_context/useChatting";
import { blockUser } from "@/app/_lib/actions";
import { useTranslations } from "next-intl";
import ChatSettings from "./ChatSettings";
import PrivacyAndHelp from "./PrivacyAndHelp";
import SharedFiles from "./SharedFiles";
import SharedPhotos from "./SharedPhotos";
import UserDetails from "./UserDetails";

function FriendDetails() {
  const t = useTranslations("userInfos");
  const { friend } = useChatting();
  return (
    <div className="flex h-full flex-col gap-5 px-4">
      <UserDetails />
      <ChatSettings />
      <PrivacyAndHelp />
      <SharedPhotos />
      <SharedFiles />
      <div>
        <button
          onClick={() => blockUser(friend.friendId, !friend.isBlocked)}
          className="mt-auto mb-10 h-9 w-full cursor-pointer rounded-md bg-gradient-to-br from-red-500/80 via-rose-600/80 to-rose-700/80 shadow-sm shadow-slate-950/30 transition-all duration-300 hover:bg-red-700/80 hover:shadow-md hover:shadow-slate-950/40 focus:border-0 focus:ring-red-500/30 focus:outline-4 focus:outline-offset-1 focus:outline-red-500/50 active:shadow-xs active:shadow-slate-950/30"
        >
          {friend.isBlocked ? t("blockUserActive") : t("blockUser")}
        </button>
      </div>
    </div>
  );
}

export default FriendDetails;
