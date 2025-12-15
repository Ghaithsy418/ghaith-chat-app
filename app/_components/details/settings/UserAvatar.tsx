"use client";
import { useCurrUser } from "@/app/_context/useCurrUser";
import { uploadAvatar } from "@/app/_lib/actions";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useTransition } from "react";
import { HiOutlineCamera } from "react-icons/hi2";
import InitialAvatar from "../../ui/InitialAvatar";
import Spinner from "../../ui/Spinner";
import ReusableAvatar from "../../ui/ReusableAvatar";

function UserAvatar() {
  const [isHover, setIsHover] = useState(false);
  const { avatar_url, display_name } = useCurrUser();
  const camera = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChoose() {
    camera?.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const imageFile = e.target.files?.[0];
    if (imageFile) startTransition(() => uploadAvatar(imageFile));
  }

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative"
      onClick={handleChoose}
    >
      {!avatar_url && !isPending && (
        <InitialAvatar
          name={display_name}
          className={`h-15 w-15 text-3xl transition-all duration-300 ${isHover || isPending ? "text-transparent" : ""}`}
        />
      )}

      {avatar_url && !isPending && (
        <ReusableAvatar
          display_name={display_name}
          avatar_url={avatar_url}
          className={`transition-all duration-300 ${isHover ? "opacity-0" : ""} h-15 w-15`}
        />
      )}

      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={camera}
        onChange={handleChange}
      />
      {isPending && <Spinner />}

      <AnimatePresence mode="wait">
        {isHover && !isPending && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute top-[50%] left-[50%] h-[61px] w-[61px] translate-[-50%] cursor-pointer rounded-full border-1 border-slate-800/60 bg-slate-600/80 p-4 text-3xl text-slate-300/80"
          >
            <HiOutlineCamera className="ltr:translate-x-[-1px] rtl:translate-x-[1.5px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default UserAvatar;
