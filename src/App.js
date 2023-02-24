import Task from "./assets/Task";
import { useState } from "react";

function App() {
  //tasks array and is complete status states
  const {tasks, setTasks} = useState([]);
  const {isComplete, toggleComplete} = useState(false);

  return (
    <div className="container w-screen h-screen bg-white flex justify-center items-center">
      <div className="header w-1/2 h-1/2 bg-slate-400 rounded-md">
        <h1 className="text-2xl text-blue-700">To do list app</h1>
        <div className="inputsForm">
          <form>
            <input type="text" name="" value=""/>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div className="tasks">
          <ul>
              <Task completed={completed} />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;


