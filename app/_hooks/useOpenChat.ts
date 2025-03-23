"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useOpenChat(){
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleChangeUrl(query: string){
        const url = new URLSearchParams(searchParams);
        if(query === "") url.delete("num");
        else url.set("num",query);
        router.replace(`${pathname}?${url.toString()}`,{
            scroll: false
        })
    }
    
    return handleChangeUrl
}