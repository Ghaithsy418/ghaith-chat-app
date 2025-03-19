import React from 'react'
import ChatHead from './ChatHead'
import ChatContainer from './ChatContainer'
import ChatSender from './ChatSender'

function Chat() {
  return (
    <div className="flex-2 border-l-1 border-r-1 border-gray-300/30 flex flex-col h-full">
      <ChatHead />
      <ChatContainer />
      <ChatSender />
    </div>
  )
}

export default Chat