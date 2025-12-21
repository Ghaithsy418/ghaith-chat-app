import { create } from "zustand";

interface FriendType {
  friendId: string;
  friendName: string;
  friendImage: string;
  friendBio: string;
}

interface ChattingType {
  friend: FriendType;
  setFriend: (value: FriendType) => void;
  search: string;
  setSearch: (value: string) => void;
  roomId: string;
  setRoomId: (value: string) => void;
}

const useChatting = create<ChattingType>((set) => ({
  friend: {
    friendId: "",
    friendName: "",
    friendImage: "",
    friendBio: "",
  },
  setFriend: (value) => set({ friend: value }),
  search: "",
  setSearch: (value) => set({ search: value }),
  roomId: "",
  setRoomId: (value) => set({ roomId: value }),
}));

export default useChatting;
