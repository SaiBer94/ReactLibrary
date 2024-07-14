import React from 'react'
import { users } from '../../Data/dataUser'
import UserCard from './UserCard'

function UserList({arr}) {
  return (
    <div>
     <div className='userCase'>
        {arr.map((user,index,array)=>{
            return(
                <UserCard
                  key = {user.id}
                  user = {user}
                  name = {user.name}
                  borrowed = {user.borrowed}
                />
            )
        })}
     </div>
    </div>
  )
}

export default UserList
