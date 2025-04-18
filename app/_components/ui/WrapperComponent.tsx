"use client";

import React, { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import Chat from "../chat/Chat";
import Details from "../details/Details";
import { useCurrUser } from "@/app/_context/useCurrUser";
import { useResize } from "@/app/_hooks/useResize";
import { useSettings } from "@/app/_context/useSettings";
import { useChatting } from "@/app/_context/useChatting";

interface WrapperTypes {
  children: ReactNode;
  className?: string;
  user: {
    display_name: string;
    email: string;
    avatar_url: string;
    status: string;
    id: string;
  };
}

const WrapperComponent: React.FC<WrapperTypes> = function ({
  children,
  className = "",
  user,
}) {
  const { setUser } = useCurrUser();
  const { widthSize } = useResize();
  const { currRightWindow } = useSettings();
  const { friend } = useChatting();

  useEffect(function () {
    toast.success("Welcome :)");
  }, []);

  useEffect(
    function () {
      setUser({
        email: user.email,
        display_name: user.display_name,
        avatar_url: user.avatar_url,
        status: user.status,
      });
    },
    [user, setUser],
  );

  if (widthSize === 875)
    return (
      <div className={className}>
        {friend.friendName === "" && currRightWindow === "" && children}
        {currRightWindow === "settings" && <Details widthSize={widthSize} />}
        {friend.friendName !== "" &&
          (currRightWindow === "" ? (
            <Chat userId={user.id} />
          ) : (
            <Details widthSize={widthSize} />
          ))}
      </div>
    );

  if (widthSize === 1469)
    return (
      <div className={className}>
        {children}
        {currRightWindow === "" ? (
          <Chat userId={user.id} />
        ) : (
          <Details widthSize={widthSize} />
        )}
      </div>
    );

  return (
    <div className={className}>
      {children}
      <Chat userId={user.id} />
      <Details />
    </div>
  );
};

export default WrapperComponent;
