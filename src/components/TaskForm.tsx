import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";

import { Task } from '../interfaces/Task';

// Ahora necesito traer una funcion como prop, para hacerlo hago lo siguiente: via el tipado, le indico que esa prop es una funcion y que no devuelve nada (void).
interface Props {
  addANewTask: (task: Task) => void
};

// type generado:
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type HandleNewTask = FormEvent<HTMLFormElement>;
// ahora le decimos al componente que espera un tipo de dato 'props' que es de tipo 'Props(nuestra interface)'

const initialState = {
  title: '',
  description: '',
}
const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState<Task>(initialState);
  const inputTitle = useRef<HTMLInputElement>(null)

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
  };
  // cada vez que tipeamos, javascript devuelve un objeto con un monton de datos, por ende, typescript devuelve un error al querer traer un dato solo con la e. Entonces usamos una interface de React que se llama changeEvent y le agrego el tipo de dato al cual pertenece el elemento. Ahora para hacerlo menos verboso y mas legible, le genero un type y solo llamo al type generado.

  const handleNewTask = (e: HandleNewTask) => {
    e.preventDefault() // para cancelar el envio del formulario.
    addANewTask(task)
    setTask(initialState) // para que esto funcione, el input tiene que pode reflejar este estado. Lo hacemos con un value (lineas 49 y 56)
    inputTitle.current?.focus()
  }

  return (
    <>
      <div className="container rounded mx-auto mt-10 p-4 bg-indigo-500 grid grid-cols-1">
        <h1 className="uppercase text-white font-bold text-xl">Add task</h1>
        <form
          onSubmit={handleNewTask}
          className="mt-5 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Write a task"
            name="title"
            className="p-1"
            onChange={handleInputChange}
            value={task.title}
            autoFocus
            ref={inputTitle}
            required
          />
          <textarea
            className="p-1"
            placeholder="Write a description"
            name="description"
            rows={3}
            value={task.description}
            required
            onChange={handleInputChange}>
              
          </textarea>
          <button type='submit' className="flex justify-start bg-emerald-400 hover:opacity-90 p-1 rounded">
            <span className="mx-auto">
              <AiFillPlusCircle size={25} />
            </span>
          </button>
        </form>
      </div>
    </>
  )
}

export default TaskForm;