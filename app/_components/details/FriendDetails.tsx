import { useChatting } from "@/app/_context/useChatting";
import { blockUser } from "@/app/_lib/actions";
import { useTranslations } from "next-intl";
import ChatSettings from "./ChatSettings";
import PrivacyAndHelp from "./PrivacyAndHelp";
import SharedFiles from "./SharedFiles";
import SharedPhotos from "./SharedPhotos";
import UserDetails from "./UserDetails";
import { useTransition } from "react";

function FriendDetails() {
  const t = useTranslations("userInfos");
  const [isPending, startTransition] = useTransition();
  const { friend, setFriend } = useChatting();
  return (
    <div className="scrollbar flex h-full flex-col gap-5 overflow-auto px-4">
      <UserDetails />
      <ChatSettings />
      <PrivacyAndHelp />
      <SharedPhotos />
      <SharedFiles />
      <div>
        <button
          onClick={() => {
            startTransition(async () => {
              const res = await blockUser(friend.friendId, !friend.isBlocked);
              if (res.success) {
                setFriend({
                  ...friend,
                  isBlocked: !friend.isBlocked,
                });
              }
            });
          }}
          disabled={friend.gotBlocked}
          className="mt-auto mb-10 h-9 w-full cursor-pointer rounded-md bg-gradient-to-br from-red-500/80 via-rose-600/80 to-rose-700/80 shadow-sm shadow-slate-950/30 transition-all duration-300 hover:bg-red-700/80 hover:shadow-md hover:shadow-slate-950/40 focus:border-0 focus:ring-red-500/30 focus:outline-4 focus:outline-offset-1 focus:outline-red-500/50 active:shadow-xs active:shadow-slate-950/30 disabled:cursor-not-allowed disabled:from-gray-800/80 disabled:via-gray-800/80 disabled:to-gray-800/80 disabled:hover:bg-gray-700/80"
        >
          {isPending && "Loading..."}
          {friend.isBlocked && !isPending && t("blockUserActive")}
          {friend.gotBlocked && !isPending && t("gotBlocked")}
          {!friend.isBlocked &&
            !isPending &&
            !friend.gotBlocked &&
            t("blockUser")}
        </button>
      </div>
    </div>
  );
}

export default FriendDetails;
