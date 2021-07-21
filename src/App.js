import {nanoid} from "nanoid";
import AddTaskForm from "./AddTaskForm";
import AddTask from './AddTask';
import './App.css';
import {useState} from "react";

const App = () => {
    const [task, setTask] = useState([
        {task: "buy car", id: nanoid()},
        {task: "buy milk", id: nanoid()},
        {task: "buy cucumber", id: nanoid()},
    ]);

    const printMessage = task.map((task) => {
        return <AddTask message={task.task}/>
    })

  return (
      <div>
          <AddTaskForm/>
          {printMessage}
      </div>
  )
};

export default App;
