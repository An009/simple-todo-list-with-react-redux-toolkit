import React from 'react';
import {TiDelete} from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteTask,toggleTask } from '../Features/tasksSlice';
const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const handleCheckbox = ()=>{
    dispatch(toggleTask({id:task.id,done: !task.done}))
  }
  return (
    <div className='container w-25'>
      <ul className="list-group">
          <li className="list-group-item d-flex justify-content-center align-items-center shadow p-2 mb-2 bg-body rounded">
            <input className="form-check-input me-2" type="checkbox" value={task.done} onChange={handleCheckbox}/>
            <label className="form-check-label" htmlFor="firstCheckbox">{task.text}</label>
            <button className='btn btn-primary m-2' onClick={()=>dispatch(deleteTask(task.id))}><TiDelete size={30}/></button>
          </li>  
      </ul>
    </div>
    
  )
}

export default TaskItem