import { useState } from "react";

import logo from './logo.svg';
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";

interface Props {
  title: string
};

const App = ({ title }: Props) => {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task example',
      description: 'Task example',
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
            <h1>{title}</h1>
          </div>
        </nav>

        <main className="container rounded  mx-auto mt-10 p-4 bg-indigo-500">
          <TaskList tasks={tasks}/>
        </main>
      </div>
    </>
  )
}

export default App;