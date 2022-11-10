import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

const store = configureStore({
    reducer:{
        tasks:tasksReducer
    }
})
export default store;