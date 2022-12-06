import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddForm, setshowAddForm]= useState(false)
  const[tasks,setTasks] = useState([
    {
        id:1,
        text: "Code zu schreiben",
        day: "täglich",
        reminder: true,
    },
    {
        id:2,
        text: "Deutsch zu lesen",
        day: "1StundeTäglich",
        reminder: true,
    },
    {
        id:3,
        text: "Youtub zu schauen",
        day: "zwei mal pro Tag",
        reminder: false,
    }
]);
// gelöschte Task ist hier möglich
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
// Remeinder zu aktiveren
const toggelRemeinder = (id)=>{
  setTasks(tasks.map((task)=>
    task.id=== id?{...task,reminder:!task.reminder}:task
  ))
};
  //addTask
  const addTask=(task)=>{
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id,...task};
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
        <Header showAddForm={showAddForm} onAdd={()=>setshowAddForm(!showAddForm)} title="MY TASK"/>
        {showAddForm && <AddTask onAdd={addTask}/>}
        {tasks.length>0?<Tasks onToggle={toggelRemeinder} onDelete={deleteTask} tasks={tasks}/> :"NO Task"}

    </div>

  );  
}

export default App;
