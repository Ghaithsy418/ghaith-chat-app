import { iconClassName } from "@/app/_helpers/classNames";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import { HiMiniPhone, HiMiniVideoCamera } from "react-icons/hi2";
import BackArrow from "./BackArrow";
import InfoButton from "./InfoButton";

function ChatHead() {
  return (
    <div className="flex h-20 items-center justify-between border-b-1 border-indigo-100/30 px-4">
      <div className="flex items-center justify-center gap-5">
        <BackArrow />
        <div>
          <Image
            src={avatar}
            width="52"
            height="52"
            className="rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div>
          <h2 className="text-md font-semibold">Ghaith Shabakji</h2>
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
