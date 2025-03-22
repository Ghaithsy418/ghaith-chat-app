"use client";

import React, { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";

interface WrapperTypes {
  children: ReactNode;
  className: string;
}

const WrapperComponent: React.FC<WrapperTypes> = function ({
  children,
  className = "",
}) {
  useEffect(function () {
    toast.success("Welcome :)");
  }, []);

  return <div className={className}>{children}</div>;
};

export default WrapperComponent;
