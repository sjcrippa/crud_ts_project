const TaskForm = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        <h1 className="uppercase text-white">Add task</h1>
        <form className="mt-5 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Write a task"
            name="title"
            className="p-1"
          />
          <textarea
            className="p-1"
            name="description"
            rows={2}>
          </textarea>
        </form>
        <button className="flex justify-start mt-5 bg-emerald-500">
          Save
        </button>
      </div>
    </>
  )
}

export default TaskForm;