import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./slice";
import Todoreducer from "./todoSlice"
export const store = configureStore({
  reducer:{
    userData:Userreducer,
    todoData:Todoreducer
  }
});
