import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    {id:1,text:"play foot",done:false},
    {id:2,text:"do your homework",done:false}
    ];
const tasksSlice = createSlice({
    name:"tasks",
    initialState:{value:initialStateValue},
    reducers:{
        addTask:(state,action)=>{
            state.value.push(action.payload)
        },
        deleteTask:(state,action)=>{
            const taskId = action.payload
            state.value = state.value.filter((task)=>task.id !== taskId)
        },
        toggleTask :(state,action)=>{
            const index = state.value.findIndex((todo)=>todo.id===action.payload.id) 
            state.value[index].done = action.payload.done
        }
    }
})
export const{addTask,deleteTask,toggleTask} = tasksSlice.actions
export default tasksSlice.reducer;