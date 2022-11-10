import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialStateValue = [
    {id:1,text:"play foot",done:false},
    {id:2,text:"do your homework",done:false}
    ];
const tasksSlice = createSlice({
    name:"tasks",
    initialState:{value:initialStateValue},
    reducers:{
        addTask:(state,action)=>{
            if(action.payload.text == ''){
                console.log('add task!!')
            }
            else{
                state.value.push(action.payload);
                toast.success('task added successfully!',{
                    position: toast.POSITION.TOP_CENTER
                })
            }
            
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