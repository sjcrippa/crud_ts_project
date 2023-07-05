import { Task } from "../interfaces/Task"
import TaskList from "./TaskList"

interface Props {
    tasks: Task[];
    deleteATask: (id: number) => void;
}
const Main = ({ tasks, deleteATask }: Props) => {
    return (
        <>
            <main className="container rounded mx-auto mt-10 mb-10 p-4 bg-indigo-500">
                <h1 className="mb-5 text-white text-2xl font-bold font-serif">TO DO List</h1>
                <TaskList tasks={tasks} deleteATask={deleteATask} />
            </main>
        </>
    )
}

export default Main