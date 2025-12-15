"use client";

import { useGetRooms } from "@/app/_hooks/clientHooks/useGetRooms";
import Spinner from "../ui/Spinner";
import ChatList from "./ChatList";
import ListHead from "./ListHead";

function List() {
  const { data: rooms, isLoading, error } = useGetRooms();

  return (
    <div className="scrollbar flex flex-1 flex-col justify-center overflow-auto border-gray-300/30 py-4 ltr:border-r rtl:border-l">
      <ListHead />
      {isLoading && <Spinner className="mx-auto mb-[80%]" />}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && <ChatList rooms={rooms} />}
    </div>
  );
}

export default List;
