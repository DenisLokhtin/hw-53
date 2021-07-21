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

    const [currentTask, setCurrentTask] = useState([
        {currentTask: ""},
    ]);

    const removeTask = index => {
        const TaskCopy = [...task];
        TaskCopy.splice(index, 1);
        setTask(TaskCopy);
    };

    const Add = () => {
        setTask(currentTask);
    };

    const printMessage = task.map((task) => {
        return <AddTask message={task.task} remove={() => removeTask(task.id)}/>
    })

  return (
      <div>
          <AddTaskForm Add={() => Add} set={() => setCurrentTask}/>
          {printMessage}
      </div>
  )
};

export default App;
