import React from 'react'
import { useSelector } from 'react-redux'
import TotalCompleteItems from './TotalCompleteItems'

const TaskHeader = () => {
  
  return (
    <div className='container shadow p-3 mb-3 bg-body rounded mt-2'>
      <h2>Redux Toolkit</h2>
      <TotalCompleteItems />
    </div>
  )
}

export default TaskHeader