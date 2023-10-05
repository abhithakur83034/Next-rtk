"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUser } from '../redux/slice'

const Apipage = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchApiUser())
    },[])

    const user = useSelector((data)=>data.userData.userApiData)
    console.log(user);
  return (
    <>
    <h1>user list from api</h1>
    {
        user.map((item)=>(
            <ul>
                <li>{item.name}</li>
            </ul>
        ))
    }
    </>
  )
}

export default Apipage