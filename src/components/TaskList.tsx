import { Task } from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props {
	tasks: Task[]
}

const TaskList = ({ tasks }: Props) => {
	return (
		<>
			<div>

				{tasks.map((task) => <TaskCard task={task} />
				)}
			</div>
		</>
	)
}

export default TaskList