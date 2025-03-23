"use client";
/* eslint-disable @next/next/no-img-element */
import { fetchUsers } from "@/app/_lib/api";
import { useState, useTransition } from "react";
import { HiSearch } from "react-icons/hi";
import Spinner from "../ui/Spinner";
import { addFriend } from "@/app/_lib/actions";
import toast from "react-hot-toast";

function AddUser() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleSearch() {
    setResult([]);
    async function fetch() {
      const res = await fetchUsers(search.toLowerCase());
      setResult(res as unknown as []);
    }

    startTransition(() => fetch());
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center gap-5">
        <div className="flex flex-1 items-center gap-2 rounded-md bg-slate-950/30 px-2 py-1 transition-all duration-300 hover:bg-slate-950/60">
          <HiSearch className="h-5 w-5" />
          <input
            type="text"
            placeholder="search for a user using his email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-0 pb-1 focus:border-0 focus:outline-0"
          />
        </div>
        <button
          onClick={handleSearch}
          className="cursor-pointer rounded-md bg-slate-900/70 px-4 py-1.5 transition-all duration-300 hover:bg-slate-950/70"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 divide-y-2 divide-indigo-200/30">
        {result.map((item: item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-evenly gap-2 rounded-sm bg-slate-500/40 px-4 py-2"
          >
            <img
              src="./avatar.png"
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
            <h3 className="text-md font-bold text-indigo-50">
              {item.display_name}
            </h3>
            <p className="font-semilight text-xs text-gray-300">{item.email}</p>
            <button
              onClick={async () => {
                const bool = await addFriend(item.id);
                if (!bool)
                  toast.error(`${item.display_name} is Really your friend!`);
                else
                  toast.success(`${item.display_name} is Your Friend Now 😁`);
              }}
              className="cursor-pointer rounded-md bg-slate-900/70 px-4 py-2 transition-all duration-300 hover:bg-slate-950/70"
            >
              Add
            </button>
          </div>
        ))}
        {isPending && <Spinner className="mb-2" />}
        {!isPending && result.length === 0 && (
          <p className="text-lg">
            No Friends yet?? try to search for a Freind :){" "}
          </p>
        )}
      </div>
    </div>
  );
}

interface item {
  id: string;
  email: string;
  display_name: string;
}

export default AddUser;
