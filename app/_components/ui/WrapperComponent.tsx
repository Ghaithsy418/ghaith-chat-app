"use client";

import useChatting from "@/app/_context/useChatting";
import { useCurrUser } from "@/app/_context/useCurrUser";
import { useSettings } from "@/app/_context/useSettings";
import { useResize } from "@/app/_hooks/useResize";
import { UserType } from "@/app/_types/userTypes";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Chat from "../chat/Chat";
import List from "../list/List";

interface WrapperTypes {
  className?: string;
  user: UserType;
}

const WrapperComponent: React.FC<WrapperTypes> = function ({
  className = "",
  user,
}) {
  const { setUser } = useCurrUser();
  const { widthSize } = useResize();
  const { currRightWindow } = useSettings();
  const { roomId } = useChatting();

  useEffect(function () {
    toast.success("Welcome :)");
  }, []);

  const { email, fullName, image, bio, _id } = user;

  useEffect(
    function () {
      setUser({
        email,
        fullName,
        image,
        bio,
      });
    },
    [user, setUser],
  );

  if (widthSize === 875)
    return (
      <div className={className}>
        {currRightWindow === "" && <List />}
        {/*
        {currRightWindow === "settings" && <Details widthSize={widthSize} />}*/}
        {roomId !== "" &&
          (currRightWindow === "" ? (
            <Chat userId={_id} />
          ) : (
            // <Details widthSize={widthSize} />
            <></>
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
          // <Details widthSize={widthSize} />
          <></>
        )}
      </div>
    );

  return (
    <div className={className}>
      <List />
      <Chat userId={_id} />
      {/*
      <Details /> */}
    </div>
  );
};

export default WrapperComponent;
