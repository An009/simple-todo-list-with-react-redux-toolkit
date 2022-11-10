import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Features/tasksSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = () => {

  const dispatch = useDispatch();
  const tasksNumber = useSelector(state=>state.tasks.value)
  const [newTask, setNewTask] = useState('');

  const handleChange = (e)=>{
    setNewTask(e.target.value); 
  }
  return (
    <div className='container'>
      <div className="input-group m-2 shadow p-2 mb-2 bg-body rounded">
        <input type="text"
          className="form-control p-2" 
          placeholder="Add task"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2"
          onClick={()=>dispatch(addTask({id:tasksNumber[tasksNumber.length-1].id+1,text:newTask,done:false}))}>
            Add
          </button>
          <ToastContainer />
      </div>
    </div>
  )
}

export default TaskForm