import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main>
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;

// rfce para crear la estructura de un componente
// imp importar
// ul>li*5>a{texto $} escritura emmet
