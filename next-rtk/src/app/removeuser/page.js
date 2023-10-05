"use client"
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from "@/app/redux/slice";

const page = () => {
    const dispatch = useDispatch()
    const user = useSelector((data)=>data.userData.users)
    console.log(user);
  return (
   <>
     <h1>Remove User Page</h1>
     {
      user.map((users)=>(
        // eslint-disable-next-line react/jsx-key
        <div className='user-item'>
          <span>{users.name}</span>
          <button onClick={()=>dispatch(removeUser(users.id))} >Remove</button>
        </div>
      ))
    }
     <Link href={"/"}>go to home</Link>
   </>
  )
}

export default page