import React from 'react'

function Task(props) {

  return (
    <div className="rounded-md h-16 w-1/2 flex justify-center items-center none" style={{backgroundColor: props.task.complete ? "green" : "red"}}>
        <li>{props.task.taskName}</li>
        <button className="h-auto w-1/4 p-4 flex justify-center items-center bg-white rounded border-black border-2 text-black" type="submit" onClick={()=> props.toggleComplete(props.task.id)}>Done</button>
        <button className="h-auto w-1/4 p-4 flex justify-center items-center bg-white rounded border-black border-2 text-black" type="submit" onClick={() => props.handleDelete(props.task.id)}>Delete</button>
    </div>
  )
}

export default Task