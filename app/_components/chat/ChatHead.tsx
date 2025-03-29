import { useChatting } from "@/app/_context/useChatting";
import { iconClassName } from "@/app/_helpers/classNames";
import { HiMiniPhone, HiMiniVideoCamera } from "react-icons/hi2";
import InitialAvatarFriends from "../ui/InitialAvatarFriends";
import BackArrow from "./BackArrow";
import InfoButton from "./InfoButton";
import ReusableImage from "../ui/ReusableAvatar";

function ChatHead() {
  const { friend } = useChatting();
  return (
    <div className="flex h-20 items-center justify-between border-b-1 border-indigo-100/30 px-4">
      <div className="flex items-center justify-center gap-5">
        <BackArrow />
        <div>
          {friend.friendAvatar && (
            <ReusableImage
              display_name={friend.friendName}
              avatar_url={friend.friendAvatar}
              className="h-12 w-12"
            />
          )}
          {!friend.friendAvatar && (
            <InitialAvatarFriends className="h-12 w-12 p-1.5 text-xl" />
          )}
        </div>
        <div>
          <h2 className="text-md font-semibold">{friend.friendName}</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
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
