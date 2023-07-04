import { useState } from "react";

import logo from './logo.svg';
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  //agrego el signo de pregunta para decirle a TS que no solo puede ser un string, sino que tambien puede ser undefined.
  title?: string
};

const App = ({ title }: Props) => {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task title',
      description: 'Task description',
      completed: false
    }
  ]);

  return (
    <>
      <div className="bg-slate-950" style={{ height: "100vh" }}>
        <nav className="w-full">
          <div className="h-14 bg-indigo-600 flex items-center text-white">
            <a href="/">
              <img src={logo} className="w-10  h-10" alt="React logo" />
            </a>
            {title && <h1 className="cursor-default">{title}</h1>}

          </div>
        </nav>

        <div className="container rounded mx-auto mt-10 p-4 bg-indigo-500">
          <TaskForm />
        </div>

        <main className="container rounded mx-auto mt-10 p-4 bg-indigo-500 grid">
          <div className="grid grid-rows-1">
            <div className="grid grid-cols-3">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </main>

      </div>
    </>
  )
}

export default App;