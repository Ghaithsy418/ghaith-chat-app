"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface userTypes {
  display_name: string;
  email: string;
  avatar_url: string;
}

interface contextTypes {
  display_name: string;
  email: string;
  avatar_url: string;
  setUser: Dispatch<SetStateAction<userTypes | undefined>>;
}

const initialState = {
  email: "",
  display_name: "",
  avatar_url: "",
  setUser: () => null,
};

const userContext = createContext<contextTypes>(initialState);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userTypes>();
  const { email, display_name, avatar_url } = user ?? initialState;
  return (
    <userContext.Provider
      value={{
        email,
        display_name,
        avatar_url,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

function useCurrUser() {
  const context = useContext(userContext);
  if (context === undefined)
    throw new Error("User Context shouldn't be used here");
  return context;
}

export { useCurrUser, UserProvider };
