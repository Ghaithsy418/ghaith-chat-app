import { create } from "zustand";

interface UserType {
  fullName: string;
  email: string;
  image: string;
  bio: string;
  phoneNumber: string;
  id: string;
}

const initialState = {
  fullName: "",
  email: "",
  image: "",
  bio: "",
  phoneNumber: "",
  id: "",
};

interface UserStore {
  user: UserType | null;

  setUser: (user: UserType) => void;
  updateUserFields: (fields: Partial<UserType>) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: initialState,

  setUser: (user) => set({ user }),

  updateUserFields: (fields) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...fields } : null,
    })),

  clearUser: () => set({ user: null }),
}));
