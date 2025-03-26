"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface contextType {
  friend: string;
  setFriend: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const ChattingContext = createContext<contextType>({
  friend: "",
  setFriend: () => {},
  search: "",
  setSearch: () => {},
});

function ChattingProvider({ children }: { children: ReactNode }) {
  const [friend, setFriend] = useState("");
  const [search, setSearch] = useState("");

  return (
    <ChattingContext.Provider value={{ friend, setFriend, search, setSearch }}>
      {children}
    </ChattingContext.Provider>
  );
}

function useChatting() {
  const context = useContext(ChattingContext);
  if (context === undefined)
    throw new Error("Chatting context shouldn't be used here");
  return context;
}

export { ChattingProvider, useChatting };
