import React from "react";
import ListHead from "./ListHead";
import ChatList from "./ChatList";

function List() {
  return <div className="flex-1 flex flex-col py-4">
    <ListHead />
    <ChatList />
  </div>;
}

export default List;
