import { Task } from "../interfaces/Task"

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <>
      <div className="border p-2 rounded grid grid-cols-1">
        <h2 className="text-white">{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <button className="bg-red-500 hover:bg-opacity-90  p-1 px-4 rounded">
          Delete
        </button>
      </div>
    </>
  )
}

export default TaskCard