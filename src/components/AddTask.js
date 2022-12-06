
import React,{useState} from "react";

const AddTask = ({onAdd}) => {
  const[text,setText]=useState("");
  const[day,setDay]=useState("");
  const[reminder,setReminder]=useState(false);


  const onSubmit =(e)=>{
    e.preventDefault()
    if(!text){
      alert("Please add a Task");
      return;
    }
    onAdd({text,day,reminder});
    setText("")
    setDay("")
    setReminder(false)
  };


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>TASK</label>
            <input type="text" placeholder="Add" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>add days</label>
            <input type="text" placeholder="Add" value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>add reminder</label>
            <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  )
}

export default AddTask
