import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function ChatSettings() {
  return (
    <div className="flex items-center justify-between">
        <span>Chat Settings</span>
        <span className="p-2 bg-slate-950/30 rounded-full cursor-pointer tranisiton-all duration-300 hover:bg-slate-50/60 hover:text-slate-950"><MdOutlineKeyboardArrowDown /></span>
    </div>
  )
}

export default ChatSettings