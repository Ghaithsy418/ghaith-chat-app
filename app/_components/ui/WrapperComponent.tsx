"use client";

import React, { ReactNode, useEffect, useRef } from "react";

interface WrapperTypes {
  children: ReactNode;
  className: string;
}

const WrapperComponent: React.FC<WrapperTypes> = function ({ children, className = "" }) {
    const app = useRef<HTMLDivElement | null>(null);
    useEffect(function(){
        if(app.current){
          app.current.addEventListener("contextmenu",function(e: MouseEvent){
            e.preventDefault();
          })
        }
    },[])

  return <div ref={app} className={className}>{children}</div>;
};

export default WrapperComponent;
