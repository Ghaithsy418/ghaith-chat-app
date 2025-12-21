"use client";
import useChatting from "@/app/_store/useChatting";
import { useTranslations } from "next-intl";
import { HiSearch } from "react-icons/hi";

function Search() {
  const { search, setSearch } = useChatting();
  const t = useTranslations("searchBar");
  return (
    <div className="flex flex-1 items-center gap-2 rounded-md bg-slate-950/30 px-2 py-1 transition-all duration-300 hover:bg-slate-950/60">
      <HiSearch className="h-5 w-5" />
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t("placeholder")}
        value={search}
        className="flex-1 border-0 pb-1 focus:border-0 focus:outline-0"
      />
    </div>
  );
}

export default Search;
