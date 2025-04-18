"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const initialState = {
  friendId: "",
  friendName: "",
  friendAvatar: "",
  friendStatus: "",
  isBlocked: false,
  gotBlocked: false,
};

interface contextType {
  friend: {
    friendId: string;
    friendName: string;
    friendAvatar: string;
    friendStatus: string;
    isBlocked: boolean;
    gotBlocked: boolean;
  };
  setFriend: Dispatch<SetStateAction<contextType["friend"]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const ChattingContext = createContext<contextType>({
  friend: initialState,
  setFriend: () => {},
  search: "",
  setSearch: () => {},
});

function ChattingProvider({ children }: { children: ReactNode }) {
  const [friend, setFriend] = useState(initialState);
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
