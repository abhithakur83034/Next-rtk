"use client"
import { addUser } from '@/app/redux/slice'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const AddUser = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log("adduser",data)
    dispatch(addUser(data.name))
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">

              <div className="card-title"><h1>AddUser</h1></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <p>
                    <input type="text" name='name' placeholder='Enter Name' className='form-control' {...register('name')} />
                  </p>
                </div>
                <div className="car-footer">
                  <button className="btn btn-primary">Submit</button><br />
                </div>
              </form>
              <Link href="/removeuser">Removeuser</Link> <br/>
              <Link href="/todolist">go To Todos</Link> <br/>
              <Link href="/apiusers">go To Api Page</Link><br/>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  )
}

export default AddUser