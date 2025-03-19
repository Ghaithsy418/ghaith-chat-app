import React from 'react'
import UserInfo from './UserInfo'
import Search from './Search'

function ListHead() {
  return (
    <div className="flex-1/5 flex flex-col px-4 gap-5">
        <UserInfo />
        <Search />
    </div>
  )
}

export default ListHead