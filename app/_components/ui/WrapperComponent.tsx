"use client";

import React, { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import Chat from "../chat/Chat";
import Details from "../details/Details";
import { useCurrUser } from "@/app/_context/useCurrUser";

interface WrapperTypes {
  children: ReactNode;
  className?: string;
  user: {
    display_name: string;
    email: string;
    avatar_url: string;
    id: string;
  };
}

const WrapperComponent: React.FC<WrapperTypes> = function ({
  children,
  className = "",
  user,
}) {
  const { setUser } = useCurrUser();

  useEffect(function () {
    toast.success("Welcome :)");
  }, []);

  useEffect(
    function () {
      setUser({
        email: user.email,
        display_name: user.display_name,
        avatar_url: user.avatar_url,
      });
    },
    [user, setUser],
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
