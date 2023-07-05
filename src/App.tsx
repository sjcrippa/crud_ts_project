import { useState } from "react";

import logo from './logo.svg';
import { Task } from "./interfaces/Task";
import TaskForm from "./components/TaskForm";
import Main from "./components/Main";
import './App.css';

interface Props {
  //agrego el signo de pregunta para decirle a TS que no solo puede ser un string, sino que tambien puede ser undefined.
  title?: string
};

const App = ({ title }: Props) => {
  // El elemento <Task[]> es un parametro extra que le damos a la funcion. 
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task title',
      description: 'Task description',
      completed: false
    }
  ]);

  const getCurrentTimeDataForId = (): number => new Date().getTime();

  // Funcion para añadir los datos desde el formulario a la grilla de cards:
  const addANewTask = (task: Task) =>
    setTasks([...tasks, {
      ...task,
      id: getCurrentTimeDataForId(),
      completed: false,
    }])

  // Funcion para eliminar las cards de la grilla:
  const deleteATask = (id: number) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <>
      <div>
        <nav className="w-full">
          <div className="h-14 bg-indigo-600 flex items-center text-white">
            <a href="/">
              <img src={logo} className="w-10  h-10" alt="React logo" />
            </a>
            {title && <h1 className="cursor-default italic">{title}</h1>}

          </div>
        </nav>

        <div className="container rounded mx-auto mt-10 p-4 bg-indigo-500">
          <TaskForm addANewTask={addANewTask} />
        </div>

        <Main tasks={tasks} deleteATask={deleteATask} />

      </div>
    </>
  )
}

export default App;