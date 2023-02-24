import React from 'react'

function Task(props) {

    const handleDelete = (props) => {

    }
  return (
    <div className="bg-slate-500 rounded-md h-16 w-1/2 flex justify-center items-center">
        <li>{props.task.name}</li>
        <button className="h-auto w-1/4 p-4 flex justify-center items-center bg-white rounded border-black border-2 text-black" type="submit" onClick={handleDelete}>X</button>
    </div>
  )
}

export default Task