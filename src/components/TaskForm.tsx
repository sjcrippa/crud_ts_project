import { ChangeEvent, useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

import { Task } from '../interfaces/Task';

// Ahora necesito traer una funcion como prop, para hacerlo hago lo siguiente: via el tipado, le indico que esa prop es una funcion y que no devuelve nada (void).
interface Props {
  addANewTask: (task: Task) => void
};

// type generado:
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
// ahora le decimos al componente que espera un tipo de dato 'props' que es de tipo 'Props(nuestra interface)'
const TaskForm = ({addANewTask}: Props) => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  
  const handleInputChange = ({ target: { name, value } }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
  };
  // cada vez que tipeamos, javascript devuelve un objeto con un monton de datos, por ende, typescript devuelve un error al querer traer un dato solo con la e. Entonces usamos una interface de React que se llama changeEvent y le agrego el tipo de dato al cual pertenece el elemento. Ahora para hacerlo menos verboso y mas legible, le genero un type y solo llamo al type generado.

  return (
    <>
      <div className="grid grid-cols-1">
        <h1 className="uppercase text-white">Add task</h1>
        <form 
        
        className="mt-5 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Write a task"
            name="title"
            className="p-1"
            onChange={handleInputChange}
          />
          <textarea
            className="p-1"
            placeholder="Write a description"
            name="description"
            rows={2}
            onChange={handleInputChange}>
          </textarea>
        </form>
        <button className="flex justify-start mt-5 bg-emerald-400 hover:opacity-90 p-1 rounded">
          <span className="mx-auto">
            <AiFillPlusCircle size={25} />
          </span>
        </button>
      </div>
    </>
  )
}

export default TaskForm;