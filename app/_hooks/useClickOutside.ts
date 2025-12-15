"use client"
import { useEffect, useRef } from "react"

export const useClickOutside = function(close: ()=> void, eventBehavior = true) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(function() {
        const handleClick = function(e: MouseEvent) {
            if(ref.current && !ref.current.contains(e.target as Node)) {
                close();
            }
        };
        
        // The issue is here - you're creating an anonymous function inside addEventListener
        // which means removeEventListener won't work properly
        document.addEventListener("click", handleClick, { capture: eventBehavior });
        
        return () => document.removeEventListener("click", handleClick, { capture: eventBehavior });
    }, [close, eventBehavior]);

    return ref;
}