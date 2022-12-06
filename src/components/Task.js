
import React from 'react';
import {FaTrash} from "react-icons/fa";


const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder?"reminder":""}`} 
    onDoubleClick={()=>onToggle(task.id)}>
         <h5>{task.text} <FaTrash onClick={()=>onDelete(task.id)} style={{color:"red", cursor:"pointer"}}/></h5> 
         <h5>{task.day}</h5>


    </div>
  )
}

export default Task
