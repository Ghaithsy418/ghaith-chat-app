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
  fullName: string;
  email: string;
  image: string;
  bio: string;
}

interface contextTypes {
  fullName: string;
  email: string;
  image: string;
  bio: string;
  setUser: Dispatch<SetStateAction<userTypes | undefined>>;
}

const initialState = {
  email: "",
  fullName: "",
  image: "",
  bio: "",
  setUser: () => null,
};

const userContext = createContext<contextTypes>(initialState);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userTypes>();
  const { email, fullName, image, bio } = user ?? initialState;
  return (
    <userContext.Provider
      value={{
        email,
        fullName,
        image,
        bio,
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
