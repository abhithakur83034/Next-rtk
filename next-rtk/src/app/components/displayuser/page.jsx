"use client"
import { removeUser } from '@/app/redux/slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DisplayUser = () => {
  const userData = useSelector((data)=>data.userData.users)
  console.log(userData);
 
  const dispatch = useDispatch()
  return (
    <>
    <h1>DisplayUser</h1>
    {
      userData.map((user)=>(
        // eslint-disable-next-line react/jsx-key
        <div className='user-item'>
          <span>{user.name}</span>
          <button onClick={()=>dispatch(removeUser(user.id))} >Remove</button>
        </div>
      ))
    }
    </>  )
}

export default DisplayUser