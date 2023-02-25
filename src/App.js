import Task from "./assets/Task";
import { useState } from "react";

function App() {
  //tasks array and is complete status states
  const [todolist, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      complete: false,
      taskName: newTask,
    };
    setToDoList([...todolist, task]);
    setNewTask("")
  }

  const handleDelete = (id) => {
    setToDoList(todolist.filter((task)=>task.id!== id));
  }
  console.log(todolist)

  const toggleComplete = (id) => {
    setToDoList(
      todolist.map((task) =>{
        if(task.id === id){
          return {...task, complete: true};
        } else{
          return task;
        }
      })
    ) 
  }

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }
  return (
    <div className="container w-screen h-screen bg-white flex justify-center items-center font-mono">
      <div className="header w-1/2 h-1/2 h-auto bg-slate-200 rounded-md p-8 flex flex-col">
        <h1 className="text-2xl text-blue-700 flex justify-center items-center font-mono">To do list app</h1>
        <div className="inputsForm flex justify-center items-center">
          <form className="flex inline-block space-x-2 p-4 text-slate-500" onSubmit={addTask}>
            <label className="text-xl font-mono">Add Task:</label>
            <input className="bg-white w-64 text-sm border-2 border-black rounded-sm" type="text" value={newTask} onChange={handleChange}/ >
            <button className="w-auto h-auto bg-slate-500 text-white px-8 py-2  hover:bg-slate-800 rounded" >Submit</button>
          </form>
        </div>

        <div className="tasks flex flex-col block justify-center items-center py-6 ">
          {todolist.map((task)=>{
            return <Task task={task} toggleComplete={toggleComplete} handleDelete = {handleDelete} />
          })}
        </div>
      </div>

    </div>
  );
}

export default App;


