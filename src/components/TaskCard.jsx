import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center">
      <div>
      <h2 className="text-xl font-bold capitalize">
        {task.title}
      </h2>
      <p className="text-sm text-gray-500 capitalize">{task.description}</p>
      </div>

      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 leading-loose"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
