"use client";

import { useResize } from "@/app/_hooks/useResize";
import useChatting from "@/app/_store/useChatting";
import { useSettings } from "@/app/_store/useSettings";
import { useUserStore } from "@/app/_store/useUser";
import { UserType } from "@/app/_types/userTypes";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Chat from "../chat/Chat";
import Details from "../details/Details";
import List from "../list/List";

interface WrapperTypes {
  className?: string;
  user: UserType;
}

const WrapperComponent: React.FC<WrapperTypes> = function ({
  className = "",
  user,
}) {
  const setUser = useUserStore((state) => state.setUser);
  const { widthSize } = useResize();
  const { currRightWindow } = useSettings();
  const { roomId } = useChatting();

  useEffect(function () {
    toast.success("Welcome :)");
  }, []);

  const { email, fullName, image, bio, _id, phoneNumber } = user;

  useEffect(
    function () {
      setUser({
        email,
        fullName,
        image,
        bio,
        phoneNumber,
        id: _id,
      });
    },
    [user, setUser],
  );

  if (widthSize === 875)
    return (
      <div className={className}>
        {currRightWindow === "settings" && <Details widthSize={widthSize} />}
        {roomId !== "" &&
          (currRightWindow === "" ? (
            <>
              <List />
              <Chat userId={_id} />
            </>
          ) : (
            <Details widthSize={widthSize} />
          ))}
      </div>
    );

  if (widthSize === 1469)
    return (
      <div className={className}>
        <List />
        {currRightWindow === "" ? (
          <Chat userId={_id} />
        ) : (
          <Details widthSize={widthSize} />
        )}
      </div>
    );

  return (
    <div className={className}>
      <List />
      <Chat userId={_id} />
      <Details />
    </div>
  );
};

export default WrapperComponent;
