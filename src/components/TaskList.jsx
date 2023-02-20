import { useContext } from "react";

import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h2 className="text-white text-4xl font-bold text-center">No hay tareas aún</h2>;
  }

  return (
    <div className="grid gap-2 max-w-lg mx-auto">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
