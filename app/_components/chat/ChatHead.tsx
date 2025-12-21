import { iconClassName } from "@/app/_helpers/classNames";
import useChatting from "@/app/_store/useChatting";
import { HiMiniPhone, HiMiniVideoCamera } from "react-icons/hi2";
import InitialAvatarFriends from "../ui/InitialAvatarFriends";
import ReusableImage from "../ui/ReusableAvatar";
import BackArrow from "./BackArrow";
import InfoButton from "./InfoButton";

function ChatHead() {
  const { friend } = useChatting();

  return (
    <div className="flex h-20 items-center justify-between border-b border-indigo-100/30 px-4">
      <div className="flex items-center justify-center gap-5">
        <BackArrow />
        <div>
          {friend.friendImage && (
            <ReusableImage
              fullName={friend.friendName}
              image={friend.friendImage}
              className="h-12 w-12"
            />
          )}
          {!friend.friendImage && (
            <InitialAvatarFriends className="h-12 w-12 p-1.5 text-xl" />
          )}
        </div>
        <h2 className="text-md font-semibold">{friend.friendName}</h2>
        {/* <div>
          {!friend.isBlocked && !friend.gotBlocked && (
            <p className="text-sm text-gray-400">
              {friend.friendStatus?.slice(0, 200)}
            </p>
          )}
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-5">
        <HiMiniPhone className={iconClassName} />
        <HiMiniVideoCamera className={iconClassName} />
        <InfoButton />
      </div>
    </div>
  );
}

export default ChatHead;
