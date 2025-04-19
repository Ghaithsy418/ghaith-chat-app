"use client"
import { useEffect, useState } from "react";

export function useResize(){
    const [widthSize, setWidthSize] = useState(0);
    useEffect(function(){
        function handleResize(){
                if(window.innerWidth >= 1469) setWidthSize(0)
                if(window.innerWidth <= 1469)  setWidthSize(1469)
                if(window.innerWidth <= 875) setWidthSize(875)    
        }
        handleResize();

        window.addEventListener("resize",handleResize);

        return ()=> window.removeEventListener("resize",handleResize)
    },[setWidthSize]);

    return {widthSize}
}