import { Task } from "../interfaces/Task";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

const TaskCard = ({ task, deleteATask }: Props) => {
  return (
    <>
      <div className="border p-2 rounded">
        <h2 className="text-white text-xl font-bold font-sans text-center uppercase">{task.title}</h2>
        <div className="mt-2 text-white font-medium tracking-wide">
          <p>{task.description}</p>
          <p>ID: {task.id}</p>
        </div>
        <div className="flex justify-center">
          <button onClick={() => task.id && deleteATask(task.id)} className="px-10 py-2 bg-red-500 hover:bg-opacity-90 p-1 rounded mt-3 hover:scale-110 duration-150">
            <FaTrashAlt size={25} />
          </button>
        </div>
      </div>
    </>
  )
}

export default TaskCard