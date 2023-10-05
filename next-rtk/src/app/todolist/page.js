"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../redux/todoSlice'

const Todopage = () => {
    const {register, handleSubmit} = useForm()

    const todoData = useSelector((data)=>data.todoData.todos)
    console.log(todoData);

    const dispatch = useDispatch()
    const onSubmit=(data)=>{
        // console.log(data.name);
        dispatch(addTodos(data.name))
    }
  return (
   <>
     <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">

              <div className="card-title"><h1>Add Todos</h1></div>
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
              {/* <Link href="/removeuser">Removeuser</Link> */}
            </div>
          </div>
          <div className="card">
          <div className="card-title"><h1>Display Todos</h1></div>
            {
              todoData.length  && todoData.map((item,index)=>{
                return(
                    <ul key={index}>
                        <li>{item.name}</li>
                    </ul>
                )
              })
            }
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
   </>
  )
}

export default Todopage