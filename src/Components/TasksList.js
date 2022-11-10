import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'

const TasksList = () => {
  const tasksListe = useSelector(state=>state.tasks.value);
  return (
    <div>
      {tasksListe && tasksListe.map(task=>{
        return(<TaskItem key={task.id} task={task}/>)
      })}
    </div>
  )
}

export default TasksList