import React from 'react'

function Task(props) {

  return (
    <div className="font-mono rounded-md h-16 w-1/2 flex justify-center items-center list-none space-x-36 m-1 bg-white p-10 px-64 border	 border-black shadow shadow-slate-800" style={{ backgroundColor: props.task.complete && "green" }}>
      <li>{props.task.taskName}</li>
      <div className='flex justify-center items-center space-x-2'>
        <button className="w-auto h-auto bg-slate-500 text-white px-8 py-2  hover:bg-slate-800 rounded" type="submit" onClick={() => props.toggleComplete(props.task.id)}>Done</button>
        <button className="w-auto h-auto bg-white  border-2 border-red-600 text-slate-500 px-8 py-2  hover:bg-red-600 hover:text-white rounded" type="submit" onClick={() => props.handleDelete(props.task.id)}>Delete</button>
      </div>

    </div>
  )
}

export default Task