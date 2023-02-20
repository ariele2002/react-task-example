import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h2 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h2>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus // para que haga foco en este campo al empezar
          required
        />
        <hr />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          name="text"
          id="text"
          cols="30"
          rows="2"
          placeholder="Descripción..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-700  hover:bg-indigo-500 px-3 py-1 text-white rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
