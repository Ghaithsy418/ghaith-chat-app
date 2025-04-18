import { useEffect, useState } from "react";

export function useResize(){
    const [widthSize, setWidthSize] = useState(0);
    useEffect(function(){
        window.addEventListener("resize",function(){
            if(window.innerWidth >= 1469) setWidthSize(0)
            if(window.innerWidth <= 1469)  setWidthSize(1469)
            if(window.innerWidth <= 875) setWidthSize(875)    
        });
    },[setWidthSize]);

    return {widthSize}
}