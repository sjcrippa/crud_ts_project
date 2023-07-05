import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
	tasks: Task[];
	deleteATask: (id: number) => void;
};

const TaskList = ({ tasks, deleteATask }: Props) => {
	return (
		<>
			<div className='grid grid-cols-3 gap-5'>
				{tasks.map((task) =>
					<div key={task.id}>
						<TaskCard task={task} deleteATask={deleteATask}/>
					</div>
				)}
			</div>
		</>	
	)
}

export default TaskList;