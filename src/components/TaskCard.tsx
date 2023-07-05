import { Task } from "../interfaces/Task"

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

const TaskCard = ({ task, deleteATask }: Props) => {
  return (
    <>
      <div className="border p-2 rounded grid grid-cols-1">
        <h2 className="text-white">{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <button onClick={() => task.id && deleteATask(task.id)} className="bg-red-500 hover:bg-opacity-90  p-1 px-4 rounded">
          Delete
        </button>
      </div>
    </>
  )
}

export default TaskCard