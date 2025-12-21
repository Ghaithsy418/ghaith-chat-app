"use client";
import { useUserStore } from "@/app/_store/useUser";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useTransition } from "react";
import { HiOutlineCamera } from "react-icons/hi2";
import InitialAvatar from "../../ui/InitialAvatar";
import ReusableAvatar from "../../ui/ReusableAvatar";
import Spinner from "../../ui/Spinner";

function UserAvatar() {
  const [isHover, setIsHover] = useState(false);
  const { image, fullName } = useUserStore((state) => state.user!);
  const camera = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChoose() {
    camera?.current?.click();
  }

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const imageFile = e.target.files?.[0];
  //   if (imageFile) startTransition(() => uploadAvatar(imageFile));
  // }

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative"
      onClick={handleChoose}
    >
      {!image && !isPending && (
        <InitialAvatar
          name={fullName}
          className={`h-15 w-15 text-3xl transition-all duration-300 ${isHover || isPending ? "text-transparent" : ""}`}
        />
      )}

      {image && !isPending && (
        <ReusableAvatar
          fullName={fullName}
          image={image}
          className={`transition-all duration-300 ${isHover ? "opacity-0" : ""} h-15 w-15`}
        />
      )}

      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={camera}
        // onChange={handleChange}
      />
      {isPending && <Spinner />}

      <AnimatePresence mode="wait">
        {isHover && !isPending && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute top-[50%] left-[50%] h-15.25 w-15.25 translate-[-50%] cursor-pointer rounded-full border border-slate-800/60 bg-slate-600/80 p-4 text-3xl text-slate-300/80"
          >
            <HiOutlineCamera className="ltr:-translate-x-px rtl:translate-x-[1.5px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default UserAvatar;
