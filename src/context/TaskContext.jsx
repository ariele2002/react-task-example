import { createContext, useState, useEffect } from "react";

import { tasks as data } from "../data/tasks";

// retorna el Nombre del contexto. Este almacena los datos.
export const TaskContext = createContext();

// Este engloba al resto de componentes.
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [myId, setMyId] = useState(0);

  useEffect(() => {
    setTasks(data);
    setMyId(data.length);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        // id: tasks.length,
        id: myId,
        title: task.title,
        description: task.description,
      },
    ]);
    setMyId(myId + 1);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
